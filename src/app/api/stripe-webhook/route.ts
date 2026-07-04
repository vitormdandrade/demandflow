import { NextRequest } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getSupabase } from "@/lib/supabase";
import { getFieldKeys } from "@/lib/letter";
import type { TemplateId } from "@/lib/templates";

import { sendLetterEmail, sendInvoiceGuardReportEmail } from "@/lib/email";
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("STRIPE_WEBHOOK_SECRET is not set", { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  // The raw body is required for signature verification — read it as text.
  const payload = await request.text();

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return new Response(`Webhook error: ${message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.mode === "subscription") {
      const email = session.customer_details?.email ?? session.customer_email;
      const customerId =
        typeof session.customer === "string"
          ? session.customer
          : session.customer?.id;
      const subscriptionId =
        typeof session.subscription === "string"
          ? session.subscription
          : session.subscription?.id;

      console.log(
        `[stripe-webhook] checkout.session.completed (subscription) for ${session.id} ` +
          `(customer: ${email ?? "unknown"}, subscription: ${subscriptionId ?? "unknown"})`,
      );

      if (email && customerId && subscriptionId) {
        await upsertSubscriptionFromCheckout(
          email,
          customerId,
          subscriptionId,
        );
      }
    } else {
      const metadata = session.metadata ?? {};

      // ── Invoice Guard Full Report ──
      if (metadata.product === "invoice-guard-report") {
        const email = session.customer_details?.email ?? metadata.email;
        if (email) {
          sendInvoiceGuardReportEmail({
            to: email,
            sessionId: session.id,
            invoiceAmount: metadata.invoiceAmount ?? "",
            dueDate: metadata.dueDate ?? "",
            paymentDate: metadata.paymentDate ?? "",
            stateCode: metadata.stateCode ?? "",
          }).catch((err) =>
            console.error("[stripe-webhook] Invoice guard email failed:", err),
          );
        }
        return new Response("Success", { status: 200 });
      }

      const templateId = (metadata.template as TemplateId) || "demand-letter";
      const fieldKeys = getFieldKeys(templateId);

      // Reconstruct the form fields from metadata.
      const fields: Record<string, string> = {};
      for (const key of fieldKeys) {
        if (typeof metadata[key] === "string") {
          fields[key] = metadata[key];
        }
      }

      console.log(
        `[stripe-webhook] checkout.session.completed for ${session.id} ` +
          `(template: ${templateId}, customer: ${fields.yourEmail ?? "unknown"})`,
      );
      // Deliver the letter by email so buyers don't lose it if they close the tab.
      const customerEmail = session.customer_details?.email ?? fields.yourEmail;
      if (customerEmail) {
        sendLetterEmail({
          to: customerEmail,
          templateId,
          fields,
          sessionId: session.id,
        }).catch((err) =>
          console.error("[stripe-webhook] Email delivery failed:", err),
        );
      }
    }
  }

  if (event.type === "customer.subscription.updated") {
    const subscription = event.data.object as Stripe.Subscription;
    console.log(
      `[stripe-webhook] customer.subscription.updated for ${subscription.id} ` +
        `(status: ${subscription.status})`,
    );
    await updateSubscriptionStatus(subscription);
  }

  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;
    console.log(
      `[stripe-webhook] customer.subscription.deleted for ${subscription.id}`,
    );
    await updateSubscriptionStatus(subscription);
  }

  return new Response("Success", { status: 200 });
}

// Stripe's `current_period_end` lives on the subscription's first item, not
// the subscription itself, as of this API version.
function currentPeriodEnd(subscription: Stripe.Subscription): string | null {
  const seconds = subscription.items.data[0]?.current_period_end;
  return seconds ? new Date(seconds * 1000).toISOString() : null;
}

async function upsertSubscriptionFromCheckout(
  email: string,
  stripeCustomerId: string,
  stripeSubscriptionId: string,
) {
  const supabase = getSupabase();
  if (!supabase) {
    console.log("[stripe-webhook] Supabase not configured — skipping persist.");
    return;
  }

  const stripe = getStripe();
  const subscription = await stripe.subscriptions.retrieve(stripeSubscriptionId);

  const { error } = await supabase.from("df_subscriptions").upsert(
    {
      email,
      stripe_customer_id: stripeCustomerId,
      stripe_subscription_id: stripeSubscriptionId,
      status: subscription.status,
      current_period_end: currentPeriodEnd(subscription),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "stripe_subscription_id" },
  );

  if (error) {
    console.error("[stripe-webhook] Supabase upsert failed:", error.message);
  }
}

async function updateSubscriptionStatus(subscription: Stripe.Subscription) {
  const supabase = getSupabase();
  if (!supabase) {
    console.log("[stripe-webhook] Supabase not configured — skipping persist.");
    return;
  }

  const { error } = await supabase
    .from("df_subscriptions")
    .update({
      status: subscription.status,
      current_period_end: currentPeriodEnd(subscription),
      updated_at: new Date().toISOString(),
    })
    .eq("stripe_subscription_id", subscription.id);

  if (error) {
    console.error("[stripe-webhook] Supabase update failed:", error.message);
  }
}
