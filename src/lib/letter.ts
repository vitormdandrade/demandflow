// Shared demand-letter model + renderer. Kept dependency-free so it works in
// any runtime: the route handler turns these fields into a standalone, printable
// HTML document the browser can save as a PDF.

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Render multi-line input (e.g. an address) into safe HTML line breaks.
function multiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}

// Normalize a user-entered amount into a clean "1,234.56" string. Falls back to
// the raw (escaped) input if it isn't a parseable number.
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

// A timestamp-based reference number, e.g. "DF-20260628-9F3K". The date prefix
// keeps it human-readable; the base-36 tail of the timestamp keeps it unique.
function referenceNumber(): string {
  const now = new Date();
  const datePart = now
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
  const tail = now.getTime().toString(36).slice(-4).toUpperCase();
  return `DF-${datePart}-${tail}`;
}

export function renderLetterHtml(fields: LetterFields): string {
  const amount = formatAmount(fields.amount);
  const paymentMethod = (fields.paymentMethod || "bank transfer").trim();
  const reference = referenceNumber();
  // The date lives in the letterhead, so the sender block is just identity.
  const senderBlock = [
    escapeHtml(fields.yourName),
    fields.yourAddress ? multiline(fields.yourAddress) : "",
  ]
    .filter(Boolean)
    .join("<br />");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Demand Letter — ${escapeHtml(fields.yourName)}</title>
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
        <p class="brand-tagline">Demand Letters for Freelancers</p>
      </div>
      <div class="ref">
        Ref: <strong>${reference}</strong><br />${todayLong()}
      </div>
    </div>

    <p class="block">${senderBlock}</p>

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
    <p>${escapeHtml(fields.yourName)}</p>

    <div class="letter-footer">
      Generated by DemandFlow &middot; demandflow-one.vercel.app
    </div>
  </div>
</body>
</html>`;
}
