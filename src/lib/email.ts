import { Resend } from "resend";
import { renderTemplateHtml } from "./letter";
import type { TemplateId } from "./templates";
import { getFieldKeys } from "./letter";

function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

const TEMPLATE_NAMES: Record<string, string> = {
  "demand-letter": "Demand Letter",
  "cease-and-desist": "Cease & Desist Letter",
  "contract-termination": "Contract Termination Letter",
  "late-rent-notice": "Late Rent Notice",
  "freelance-reminder": "Payment Reminder",
  "nda": "NDA / Service Agreement",
};

export async function sendInvoiceGuardReportEmail(params: {
  to: string;
  sessionId: string;
  invoiceAmount: string;
  dueDate: string;
  paymentDate: string;
  stateCode: string;
}): Promise<void> {
  const { to, sessionId, invoiceAmount, dueDate, paymentDate, stateCode } = params;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[email] RESEND_API_KEY not set — skipping invoice guard email");
    return;
  }

  const resend = getResendClient();
  const downloadUrl = `https://demandflowww.com/api/invoice-guard/download?session_id=${encodeURIComponent(sessionId)}`;

  try {
    await resend.emails.send({
      from: "DemandFlowww <letters@demandflowww.com>",
      to: [to],
      subject: "📊 Your Invoice Late Fee Report is ready",
      html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a2e;line-height:1.6">
  <div style="max-width:520px;margin:0 auto;padding:24px">
    <div style="text-align:center;padding:24px 0">
      <h1 style="color:#2563eb;font-size:22px;margin:0">📊 Your Late Fee Report is Ready</h1>
    </div>
    <p>Hi there,</p>
    <p>Your <strong>Invoice Late Fee Report</strong> is ready to download. It includes a state-by-state breakdown of statutory interest rates, your invoice payment timeline, and a demand letter template.</p>
    <p style="text-align:center;margin:24px 0">
      <a href="${downloadUrl}"
         style="display:inline-block;background:#2563eb;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600">
        Download Your PDF Report →
      </a>
    </p>
    <div style="margin:16px 0;padding:12px 16px;background:#f8fafc;border-radius:8px;font-size:13px;color:#64748b">
      <strong>Your invoice details:</strong><br>
      Amount: $${invoiceAmount} · Due: ${dueDate} · State: ${stateCode}
    </div>
    <div style="margin:16px 0;padding:12px 16px;background:#fefce8;border-radius:8px;border-left:4px solid #f59e0b">
      <p style="margin:0;font-size:13px;color:#92400e">
        💡 <strong>Next step:</strong> Include the demand letter template with your payment request to increase your chances of collecting.
      </p>
    </div>
    <div style="text-align:center;color:#94a3b8;font-size:12px;margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0">
      <p>DemandFlowww · demandflowww.com</p>
      <p>⚠️ DemandFlowww provides self-help document templates and is not a law firm.</p>
    </div>
  </div>
</body>
</html>`,
    });

    console.log(`[email] Invoice guard report email sent to ${to} (session: ${sessionId})`);
  } catch (err) {
    console.error("[email] Failed to send invoice guard report email:", err);
  }
}

export async function sendLetterEmail(params: {
  to: string;
  templateId: TemplateId;
  fields: Record<string, string>;
  sessionId: string;
}): Promise<void> {
  const { to, templateId, fields, sessionId } = params;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[email] RESEND_API_KEY not set — skipping email delivery");
    return;
  }

  const resend = getResendClient();
  const firstName = (fields.yourName || "there").split(" ")[0];
  const templateName = TEMPLATE_NAMES[templateId] || "your letter";
  const html = renderTemplateHtml(templateId, fields, { watermark: false });

  try {
    await resend.emails.send({
      from: "DemandFlowww <letters@demandflowww.com>",
      to: [to],
      subject: `📬 Your ${templateName} is ready`,
      html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a2e;line-height:1.6">
  <div style="max-width:520px;margin:0 auto;padding:24px">
    <div style="text-align:center;padding:24px 0">
      <h1 style="color:#2563eb;font-size:22px;margin:0">📬 Your ${templateName} is Ready</h1>
    </div>
    <p>Hi ${firstName},</p>
    <p>Your <strong>${templateName}</strong> has been generated and is attached below.</p>
    <p>You can also access it anytime at:</p>
    <p style="text-align:center;margin:20px 0">
      <a href="https://demandflowww.com/success?session_id=${sessionId}"
         style="display:inline-block;background:#2563eb;color:white;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:600">
        View Your Letter →
      </a>
    </p>
    <div style="margin:24px 0;padding:16px;background:#f8fafc;border-radius:8px;border-left:4px solid #2563eb">
      <p style="margin:0;font-size:13px;color:#64748b">
        💡 <strong>Tip:</strong> Most clients pay within 48 hours of receiving a formal demand letter.
      </p>
    </div>
    <div style="text-align:center;color:#94a3b8;font-size:12px;margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0">
      <p>DemandFlowww · demandflowww.com</p>
      <p>⚠️ DemandFlowww provides self-help document templates and is not a law firm.</p>
    </div>
  </div>
</body>
</html>`,
    });

    console.log(`[email] Letter email sent to ${to} (session: ${sessionId})`);
  } catch (err) {
    console.error("[email] Failed to send letter email:", err);
  }
}
