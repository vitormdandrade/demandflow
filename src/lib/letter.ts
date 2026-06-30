// Shared letter model + renderers. Kept dependency-free so it works in
// any runtime: the route handler turns these fields into a standalone, printable
// HTML document the browser can save as a PDF.

import type { TemplateId } from "./templates";

// ─── Demand Letter ──────────────────────────────────────────────────────────

export interface LetterFields {
  yourName: string;
  yourEmail: string;
  clientName: string;
  clientAddress: string;
  amount: string;
  description: string;
  dateCompleted: string;
  yourAddress?: string;
  paymentMethod?: string;
}

export const LETTER_FIELD_KEYS: (keyof LetterFields)[] = [
  "yourName",
  "yourEmail",
  "clientName",
  "clientAddress",
  "amount",
  "description",
  "dateCompleted",
  "yourAddress",
  "paymentMethod",
];

// ─── Cease & Desist Fields ───────────────────────────────────────────────────

export interface CeaseAndDesistFields {
  yourName: string;
  yourEmail: string;
  yourAddress?: string;
  recipientName: string;
  recipientAddress: string;
  violationType: string;
  violationDescription: string;
  demandAction: string;
}

export const CEASE_FIELD_KEYS: (keyof CeaseAndDesistFields)[] = [
  "yourName",
  "yourEmail",
  "yourAddress",
  "recipientName",
  "recipientAddress",
  "violationType",
  "violationDescription",
  "demandAction",
];

// ─── Contract Termination Fields ─────────────────────────────────────────────

export interface ContractTermFields {
  yourName: string;
  yourEmail: string;
  yourAddress?: string;
  recipientName: string;
  recipientAddress: string;
  contractDate: string;
  contractDescription: string;
  terminationReason: string;
  effectiveDate: string;
}

export const CONTRACT_FIELD_KEYS: (keyof ContractTermFields)[] = [
  "yourName",
  "yourEmail",
  "yourAddress",
  "recipientName",
  "recipientAddress",
  "contractDate",
  "contractDescription",
  "terminationReason",
  "effectiveDate",
];

// ─── Late Rent Notice Fields ─────────────────────────────────────────────────

export interface RentNoticeFields {
  yourName: string;
  yourEmail: string;
  yourAddress?: string;
  tenantName: string;
  tenantAddress: string;
  rentAmount: string;
  amountDue: string;
  monthsDue: string;
  lateFee?: string;
  deadline: string;
}

export const RENT_FIELD_KEYS: (keyof RentNoticeFields)[] = [
  "yourName",
  "yourEmail",
  "yourAddress",
  "tenantName",
  "tenantAddress",
  "rentAmount",
  "amountDue",
  "monthsDue",
  "lateFee",
  "deadline",
];

// ─── All-field union ─────────────────────────────────────────────────────────

export type AnyTemplateFields =
  | LetterFields
  | CeaseAndDesistFields
  | ContractTermFields
  | RentNoticeFields;

export function getFieldKeys(templateId: TemplateId): string[] {
  switch (templateId) {
    case "demand-letter":
      return LETTER_FIELD_KEYS as string[];
    case "cease-and-desist":
      return CEASE_FIELD_KEYS as string[];
    case "contract-termination":
      return CONTRACT_FIELD_KEYS as string[];
    case "late-rent-notice":
      return RENT_FIELD_KEYS as string[];
    default:
      return LETTER_FIELD_KEYS as string[];
  }
}

// ─── Shared HTML helpers ─────────────────────────────────────────────────────

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function multiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

function formatAmount(raw: string): string {
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const n = Number.parseFloat(cleaned);
  if (Number.isFinite(n)) {
    return n.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return escapeHtml(raw);
}

function todayLong(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function referenceNumber(): string {
  const now = new Date();
  const datePart = now
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
  const tail = now.getTime().toString(36).slice(-4).toUpperCase();
  return `DF-${datePart}-${tail}`;
}

// ─── Shared letter shell (style + letterhead) ────────────────────────────────

function renderShell(title: string, bodyHtml: string): string {
  const reference = referenceNumber();
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(title)}</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: #f1f5f9;
    color: #1f2937;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 16px;
    line-height: 1.7;
  }
  .sheet {
    max-width: 720px;
    margin: 32px auto;
    background: #ffffff;
    padding: 56px 72px 40px;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
  }
  .letterhead {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    padding-bottom: 20px;
    margin-bottom: 36px;
    border-bottom: 2px solid #1e3a8a;
  }
  .brand {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #1e3a8a;
    margin: 0;
  }
  .brand-tagline {
    font-size: 12px;
    letter-spacing: 0.4px;
    color: #64748b;
    margin: 2px 0 0;
  }
  .ref {
    text-align: right;
    font-family: "Courier New", monospace;
    font-size: 12px;
    color: #475569;
    white-space: nowrap;
  }
  .ref strong { color: #1e293b; }
  .block { margin: 0 0 28px; }
  .re {
    font-weight: 700;
    margin: 0 0 28px;
  }
  p { margin: 0 0 18px; }
  .demand { font-weight: 700; }
  .signature { margin-top: 40px; }
  .letter-footer {
    margin-top: 48px;
    padding-top: 16px;
    border-top: 1px solid #e2e8f0;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    letter-spacing: 0.3px;
    color: #94a3b8;
  }
  @media print {
    body { background: #ffffff; }
    .sheet { margin: 0; box-shadow: none; max-width: none; padding: 48px; }
  }
</style>
</head>
<body>
  <div class="sheet">
    <div class="letterhead">
      <div>
        <p class="brand">DemandFlow</p>
        <p class="brand-tagline">Professional Legal Letters On Demand</p>
      </div>
      <div class="ref">
        Ref: <strong>${reference}</strong><br />${todayLong()}
      </div>
    </div>
${bodyHtml}
    <div class="letter-footer">
      Generated by DemandFlow &middot; demandflow-one.vercel.app
    </div>
  </div>
</body>
</html>`;
}

function senderBlock(name: string, address?: string): string {
  return [escapeHtml(name), address ? multiline(address) : ""]
    .filter(Boolean)
    .join("<br />");
}

// ─── Demand Letter Renderer ──────────────────────────────────────────────────

export function renderLetterHtml(fields: LetterFields): string {
  const amount = formatAmount(fields.amount);
  const paymentMethod = (fields.paymentMethod || "bank transfer").trim();
  const sender = senderBlock(fields.yourName, fields.yourAddress);

  const body = `
    <p class="block">${sender}</p>

    <p class="block">${escapeHtml(fields.clientName)}<br />${multiline(
    fields.clientAddress,
  )}</p>

    <p class="re">Re: Demand for Payment — Outstanding Balance of $${amount}</p>

    <p>Dear ${escapeHtml(fields.clientName)},</p>

    <p>This letter serves as formal notice that payment in the amount of
    $${amount} remains outstanding for ${escapeHtml(
    fields.description,
  )}, completed on ${escapeHtml(fields.dateCompleted)}.</p>

    <p>Despite previous communications, this balance remains unpaid.</p>

    <p class="demand">DEMAND IS HEREBY MADE for immediate payment of the full
    amount of $${amount}. If payment is not received within 14 days of this
    letter, I reserve the right to pursue all available legal remedies,
    including but not limited to filing a claim in small claims court.</p>

    <p>Payment can be made via ${escapeHtml(paymentMethod)}.</p>

    <p>This letter is sent without prejudice to any and all rights, which are
    expressly reserved.</p>

    <p class="signature">Sincerely,</p>
    <p>${escapeHtml(fields.yourName)}</p>`;

  return renderShell(`Demand Letter — ${escapeHtml(fields.yourName)}`, body);
}

// ─── Cease & Desist Renderer ─────────────────────────────────────────────────

export function renderCeaseAndDesistHtml(fields: CeaseAndDesistFields): string {
  const sender = senderBlock(fields.yourName, fields.yourAddress);

  const body = `
    <p class="block">${sender}</p>

    <p class="block">VIA CERTIFIED MAIL<br />${escapeHtml(fields.recipientName)}<br />${multiline(
    fields.recipientAddress,
  )}</p>

    <p class="re">Re: Cease and Desist — ${escapeHtml(fields.violationType)}</p>

    <p>Dear ${escapeHtml(fields.recipientName)},</p>

    <p>This letter serves as formal notice that your conduct, as described below, is unlawful and must cease immediately. I am writing to demand that you stop engaging in the following activities:</p>

    <p><strong>Nature of Violation:</strong> ${escapeHtml(fields.violationType)}</p>

    <p><strong>Description of Violation:</strong><br />${multiline(
      fields.violationDescription,
    )}</p>

    <p class="demand">DEMAND IS HEREBY MADE that you immediately and permanently cease and desist from the conduct described above, including any and all related activities.</p>

    <p>Specifically, I demand that you:</p>
    <p>${multiline(fields.demandAction)}</p>

    <p>In the event that you fail to comply with this demand, I will pursue all available legal remedies, including but not limited to seeking injunctive relief, monetary damages, and attorney's fees. This letter is sent without prejudice to any and all rights, which are expressly reserved.</p>

    <p>Please confirm in writing within 10 days that you have complied with the demands set forth in this letter.</p>

    <p class="signature">Sincerely,</p>
    <p>${escapeHtml(fields.yourName)}</p>`;

  return renderShell(
    `Cease and Desist — ${escapeHtml(fields.yourName)}`,
    body,
  );
}

// ─── Contract Termination Renderer ───────────────────────────────────────────

export function renderContractTerminationHtml(
  fields: ContractTermFields,
): string {
  const sender = senderBlock(fields.yourName, fields.yourAddress);

  const body = `
    <p class="block">${sender}</p>

    <p class="block">VIA CERTIFIED MAIL<br />${escapeHtml(fields.recipientName)}<br />${multiline(
    fields.recipientAddress,
  )}</p>

    <p class="re">Re: Notice of Contract Termination — ${escapeHtml(
      fields.contractDescription,
    )}</p>

    <p>Dear ${escapeHtml(fields.recipientName)},</p>

    <p>This letter serves as formal notice that I am terminating the contract between us dated ${escapeHtml(
      fields.contractDate,
    )}, for ${escapeHtml(fields.contractDescription)}.</p>

    <p><strong>Reason for Termination:</strong><br />${multiline(
      fields.terminationReason,
    )}</p>

    <p>The termination shall become effective on ${escapeHtml(
      fields.effectiveDate,
    )}. All obligations under the contract shall cease as of that date, except for any provisions that, by their terms, survive termination.</p>

    <p class="demand">Pursuant to the terms of the contract, I request that you take all necessary steps to wind down the relationship by the effective date, including but not limited to the return of any property, materials, or confidential information.</p>

    <p>This letter is sent without prejudice to any and all rights, claims, or remedies that I may have arising from or related to the contract or the circumstances giving rise to this termination, all of which are expressly reserved.</p>

    <p>Please acknowledge receipt of this notice and confirm your understanding of the terms set forth herein.</p>

    <p class="signature">Sincerely,</p>
    <p>${escapeHtml(fields.yourName)}</p>`;

  return renderShell(
    `Contract Termination — ${escapeHtml(fields.yourName)}`,
    body,
  );
}

// ─── Late Rent Notice Renderer ───────────────────────────────────────────────

export function renderRentNoticeHtml(fields: RentNoticeFields): string {
  const sender = senderBlock(fields.yourName, fields.yourAddress);
  const rentAmount = formatAmount(fields.rentAmount);
  const amountDue = formatAmount(fields.amountDue);
  const lateFee = fields.lateFee
    ? formatAmount(fields.lateFee)
    : null;

  const totalDue = lateFee
    ? `$${amountDue} (plus a late fee of $${lateFee})`
    : `$${amountDue}`;

  const body = `
    <p class="block">${sender}</p>

    <p class="block">VIA CERTIFIED MAIL<br />${escapeHtml(fields.tenantName)}<br />${multiline(
    fields.tenantAddress,
  )}</p>

    <p class="re">Re: Late Rent Notice — ${escapeHtml(fields.tenantAddress)}</p>

    <p>Dear ${escapeHtml(fields.tenantName)},</p>

    <p>This letter serves as formal notice that your rent payment for the property located at ${escapeHtml(
      fields.tenantAddress,
    )} is past due.</p>

    <p><strong>Monthly Rent Amount:</strong> $${rentAmount}</p>
    <p><strong>Total Amount Past Due:</strong> ${totalDue}</p>
    <p><strong>Details:</strong> ${multiline(fields.monthsDue)}</p>

    <p class="demand">DEMAND IS HEREBY MADE for immediate payment of all outstanding rent and applicable fees. Payment must be received by ${escapeHtml(
      fields.deadline,
    )}.</p>

    <p>If payment is not received by the deadline stated above, this notice shall serve as a formal notice to pay rent or quit, and I will pursue all available legal remedies, including but not limited to initiating eviction proceedings in accordance with applicable landlord-tenant law.</p>

    <p>This letter is sent without prejudice to any and all rights under the lease agreement and applicable law, all of which are expressly reserved.</p>

    <p>If you have already made payment or believe this notice was sent in error, please contact me immediately at ${escapeHtml(
      fields.yourEmail,
    )}.</p>

    <p class="signature">Sincerely,</p>
    <p>${escapeHtml(fields.yourName)}<br /><em>Landlord / Property Manager</em></p>`;

  return renderShell(`Late Rent Notice — ${escapeHtml(fields.yourName)}`, body);
}

// ─── Dispatcher ──────────────────────────────────────────────────────────────

export function renderTemplateHtml(
  templateId: TemplateId,
  fields: Record<string, string>,
): string {
  switch (templateId) {
    case "demand-letter":
      return renderLetterHtml(fields as unknown as LetterFields);
    case "cease-and-desist":
      return renderCeaseAndDesistHtml(
        fields as unknown as CeaseAndDesistFields,
      );
    case "contract-termination":
      return renderContractTerminationHtml(
        fields as unknown as ContractTermFields,
      );
    case "late-rent-notice":
      return renderRentNoticeHtml(fields as unknown as RentNoticeFields);
    default:
      return renderLetterHtml(fields as unknown as LetterFields);
  }
}
