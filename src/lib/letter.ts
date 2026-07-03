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

// ─── Freelance Payment Reminder Fields ────────────────────────────────────────

export interface FreelanceReminderFields {
  yourName: string;
  yourEmail: string;
  clientName: string;
  amount: string;
  invoiceNumber: string;
  description: string;
  dateCompleted: string;
  dueDate: string;
  paymentMethod: string;
}

export const FREELANCE_REMINDER_FIELD_KEYS: (keyof FreelanceReminderFields)[] = [
  "yourName",
  "yourEmail",
  "clientName",
  "amount",
  "invoiceNumber",
  "description",
  "dateCompleted",
  "dueDate",
  "paymentMethod",
];

// ─── Final Notice Fields ───────────────────────────────────────────────────

export interface FinalNoticeFields {
  yourName: string;
  yourEmail: string;
  clientName: string;
  clientAddress: string;
  amount: string;
  description: string;
  dateCompleted: string;
  previousAction: string;
  deadline: string;
}

export const FINAL_NOTICE_FIELD_KEYS: (keyof FinalNoticeFields)[] = [
  "yourName",
  "yourEmail",
  "clientName",
  "clientAddress",
  "amount",
  "description",
  "dateCompleted",
  "previousAction",
  "deadline",
];

// ─── All-field union ─────────────────────────────────────────────────────────

export type AnyTemplateFields =
  | LetterFields
  | CeaseAndDesistFields
  | ContractTermFields
  | RentNoticeFields
  | FreelanceReminderFields
  | FinalNoticeFields;

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
    case "freelance-reminder":
      return FREELANCE_REMINDER_FIELD_KEYS as string[];
    case "final-notice":
      return FINAL_NOTICE_FIELD_KEYS as string[];
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

function renderShell(
  title: string,
  bodyHtml: string,
  brandName?: string,
  watermark?: boolean,
  opts?: { brandAddress?: string; brandPhone?: string; brandLogo?: string },
): string {
  const reference = referenceNumber();
  const hasBrand = (brandName ?? "").trim().length > 0;
  const brandAddress = opts?.brandAddress?.trim() ?? "";
  const brandPhone = opts?.brandPhone?.trim() ?? "";
  const brandLogo = opts?.brandLogo?.trim() ?? "";

  const logoHtml = brandLogo
    ? `<img src="${brandLogo}" alt="Logo" class="brand-logo" style="max-height:48px;max-width:200px;object-fit:contain;" />`
    : "";

  const leftSide = hasBrand
    ? `<div>
        ${logoHtml}
        <p class="brand">${escapeHtml(brandName!.trim())}</p>
        ${brandAddress ? `<p class="brand-tagline">${escapeHtml(brandAddress)}</p>` : ""}
        ${brandPhone ? `<p class="brand-tagline">${escapeHtml(brandPhone)}</p>` : ""}
        ${!brandAddress && !brandPhone ? `<p class="brand-tagline">Professional Correspondence</p>` : ""}
      </div>`
    : "";

  const letterheadClass = hasBrand
    ? "letterhead letterhead--branded"
    : "letterhead";

  const watermarkOverlay = watermark
    ? `<div class="watermark">FREE TIER — Upgrade to Pro for watermark-free letters</div>`
    : "";

  const bodyClass = watermark ? "sheet sheet--watermarked" : "sheet";
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
    position: relative;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    background: #ffffff;
    padding: 28px 32px;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
    overflow-x: hidden;
    word-wrap: break-word;
  }
  .sheet--watermarked::after {
    content: "FREE TIER";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-30deg);
    font-size: 80px;
    font-weight: 700;
    color: rgba(203, 213, 225, 0.35);
    pointer-events: none;
    white-space: nowrap;
    letter-spacing: 4px;
    z-index: 0;
  }
  .sheet--watermarked > * {
    position: relative;
    z-index: 1;
  }
  .letterhead {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-bottom: 20px;
    margin-bottom: 36px;
    border-bottom: 2px solid #1e3a8a;
  }
  .letterhead--branded {
    justify-content: space-between;
  }
  .brand {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #1e3a8a;
    margin: 0;
  }
  .brand-tagline {
    font-size: 11px;
    letter-spacing: 0.6px;
    color: #64748b;
    margin: 2px 0 0;
    text-transform: uppercase;
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
  @media print {
    body { background: #ffffff; }
    .sheet { margin: 0; box-shadow: none; max-width: none; padding: 48px; }
  }
</style>
</head>
<body>
  <div class="${bodyClass}">
    ${watermarkOverlay}
    <div class="${letterheadClass}">
      ${leftSide}
      <div class="ref">
        Ref: <strong>${reference}</strong><br />${todayLong()}
      </div>
    </div>
${bodyHtml}
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

export function renderLetterHtml(fields: LetterFields, watermark = false): string {
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

  return renderShell(
    `Demand Letter — ${escapeHtml(fields.yourName)}`,
    body,
    (fields as any).brandName,
    watermark,
    {
      brandAddress: (fields as any).brandAddress,
      brandPhone: (fields as any).brandPhone,
      brandLogo: (fields as any).brandLogo,
    },
  );
}

// ─── Cease & Desist Renderer ─────────────────────────────────────────────────

export function renderCeaseAndDesistHtml(fields: CeaseAndDesistFields, watermark = false): string {
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
    (fields as any).brandName,
    watermark,
    {
      brandAddress: (fields as any).brandAddress,
      brandPhone: (fields as any).brandPhone,
      brandLogo: (fields as any).brandLogo,
    },
  );
}

// ─── Contract Termination Renderer ───────────────────────────────────────────

export function renderContractTerminationHtml(
  fields: ContractTermFields,
  watermark = false,
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
    (fields as any).brandName,
    watermark,
    {
      brandAddress: (fields as any).brandAddress,
      brandPhone: (fields as any).brandPhone,
      brandLogo: (fields as any).brandLogo,
    },
  );
}

// ─── Late Rent Notice Renderer ───────────────────────────────────────────────

export function renderRentNoticeHtml(fields: RentNoticeFields, watermark = false): string {
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

  return renderShell(
    `Late Rent Notice — ${escapeHtml(fields.yourName)}`,
    body,
    (fields as any).brandName,
    watermark,
    {
      brandAddress: (fields as any).brandAddress,
      brandPhone: (fields as any).brandPhone,
      brandLogo: (fields as any).brandLogo,
    },
  );
}

// ─── Freelance Payment Reminder Renderer ──────────────────────────────────────

export function renderFreelanceReminderHtml(
  fields: FreelanceReminderFields,
  watermark = false,
): string {
  const amount = formatAmount(fields.amount);
  const paymentMethod = escapeHtml(fields.paymentMethod || "bank transfer");

  const body = `
    <p class="block">${escapeHtml(fields.yourName)}<br />${escapeHtml(fields.yourEmail)}</p>

    <p class="block">${escapeHtml(fields.clientName)}</p>

    <p class="re">Re: Friendly Payment Reminder — Invoice ${escapeHtml(fields.invoiceNumber)}</p>

    <p>Hi ${escapeHtml(fields.clientName)},</p>

    <p>I hope this message finds you well! I wanted to send a quick reminder about the invoice below, which appears to be past its due date. I understand things get busy, so I wanted to check in before anything becomes urgent.</p>

    <p>
      <strong>Invoice:</strong> ${escapeHtml(fields.invoiceNumber)}<br />
      <strong>Amount:</strong> $${amount}<br />
      <strong>Work Completed:</strong> ${escapeHtml(fields.description)}<br />
      <strong>Completed On:</strong> ${escapeHtml(fields.dateCompleted)}<br />
      <strong>Due Date:</strong> ${escapeHtml(fields.dueDate)}
    </p>

    <p>If payment has already been made, please disregard this message and accept my thanks! If not, I'd greatly appreciate it if you could process payment at your earliest convenience. My preferred payment method is ${paymentMethod}.</p>

    <p>If there are any questions about the invoice or if you'd like to discuss payment terms, please don't hesitate to reach out — I'm happy to work something out.</p>

    <p>Thank you for your business and I look forward to continuing our work together!</p>

    <p class="signature">Best regards,</p>
    <p>${escapeHtml(fields.yourName)}</p>`;

  return renderShell(
    `Payment Reminder — ${escapeHtml(fields.yourName)}`,
    body,
    (fields as any).brandName,
    watermark,
    {
      brandAddress: (fields as any).brandAddress,
      brandPhone: (fields as any).brandPhone,
      brandLogo: (fields as any).brandLogo,
    },
  );
}

// ─── Final Notice Renderer ────────────────────────────────────────────────────

export function renderFinalNoticeHtml(fields: FinalNoticeFields, watermark = false): string {
  const amount = formatAmount(fields.amount);

  const body = `
    <p class="block">${escapeHtml(fields.yourName)}<br />${escapeHtml(fields.yourEmail)}</p>

    <p class="block">VIA CERTIFIED MAIL<br />${escapeHtml(fields.clientName)}<br />${multiline(
    fields.clientAddress,
  )}</p>

    <p class="re">Re: Final Legal Notice — Outstanding Balance of $${amount}</p>

    <p>Dear ${escapeHtml(fields.clientName)},</p>

    <p>This letter serves as a <strong>FINAL NOTICE</strong> regarding the outstanding balance of $${amount} for ${escapeHtml(
    fields.description,
  )}, completed on ${escapeHtml(fields.dateCompleted)}.</p>

    <p><strong>Background:</strong> ${multiline(fields.previousAction)}</p>

    <p>Despite prior communications and a formal demand for payment, this balance remains unpaid. You have left me with no alternative but to escalate this matter.</p>

    <p class="demand">FINAL DEMAND IS HEREBY MADE for immediate payment of the full amount of $${amount}. Payment must be received by ${escapeHtml(
      fields.deadline,
    )}. If payment is not received by this deadline, I will immediately proceed with filing a claim in small claims court and pursuing all available legal remedies, including recovery of court costs and legal fees.</p>

    <p>This is your final opportunity to resolve this matter without court intervention. I strongly encourage you to make payment before the deadline to avoid further escalation.</p>

    <p>This letter is sent without prejudice to any and all rights, which are expressly reserved.</p>

    <p class="signature">Sincerely,</p>
    <p>${escapeHtml(fields.yourName)}</p>`;

  return renderShell(
    `Final Notice — ${escapeHtml(fields.yourName)}`,
    body,
    (fields as any).brandName,
    watermark,
    {
      brandAddress: (fields as any).brandAddress,
      brandPhone: (fields as any).brandPhone,
      brandLogo: (fields as any).brandLogo,
    },
  );
}

// ─── Dispatcher ──────────────────────────────────────────────────────────────

export function renderTemplateHtml(
  templateId: TemplateId,
  fields: Record<string, string>,
  opts?: { watermark?: boolean },
): string {
  const wm = opts?.watermark ?? false;
  switch (templateId) {
    case "demand-letter":
      return renderLetterHtml(fields as unknown as LetterFields, wm);
    case "final-notice":
      return renderFinalNoticeHtml(fields as unknown as FinalNoticeFields, wm);
    case "cease-and-desist":
      return renderCeaseAndDesistHtml(
        fields as unknown as CeaseAndDesistFields,
        wm,
      );
    case "contract-termination":
      return renderContractTerminationHtml(
        fields as unknown as ContractTermFields,
        wm,
      );
    case "late-rent-notice":
      return renderRentNoticeHtml(fields as unknown as RentNoticeFields, wm);
    case "freelance-reminder":
      return renderFreelanceReminderHtml(
        fields as unknown as FreelanceReminderFields,
        wm,
      );
    default:
      return renderLetterHtml(fields as unknown as LetterFields, wm);
  }
}
