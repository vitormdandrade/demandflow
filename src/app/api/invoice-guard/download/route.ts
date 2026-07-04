import { NextRequest } from "next/server";
import PDFDocument from "pdfkit";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

const STATE_RATES: Record<string, { name: string; rate: number; statute: string }> = {
  AL: { name: "Alabama",        rate: 6.00,  statute: "Ala. Code § 8-8-1" },
  AK: { name: "Alaska",         rate: 10.50, statute: "AS § 45.45.010" },
  AZ: { name: "Arizona",        rate: 10.00, statute: "A.R.S. § 44-1201" },
  AR: { name: "Arkansas",       rate: 6.00,  statute: "Ark. Code Ann. § 4-57-101" },
  CA: { name: "California",     rate: 10.00, statute: "Cal. Civ. Code § 3289" },
  CO: { name: "Colorado",       rate: 8.00,  statute: "C.R.S. § 5-12-102" },
  CT: { name: "Connecticut",    rate: 10.00, statute: "Conn. Gen. Stat. § 37-3a" },
  DE: { name: "Delaware",       rate: 5.00,  statute: "Del. Code tit. 6 § 2301" },
  FL: { name: "Florida",        rate: 8.00,  statute: "Fla. Stat. § 55.03" },
  GA: { name: "Georgia",        rate: 7.00,  statute: "O.C.G.A. § 7-4-2" },
  HI: { name: "Hawaii",         rate: 10.00, statute: "Haw. Rev. Stat. § 478-2" },
  ID: { name: "Idaho",          rate: 12.00, statute: "Idaho Code § 28-22-104" },
  IL: { name: "Illinois",       rate: 9.00,  statute: "815 ILCS 205/2" },
  IN: { name: "Indiana",        rate: 8.00,  statute: "Ind. Code § 24-4.6-1-103" },
  IA: { name: "Iowa",           rate: 5.00,  statute: "Iowa Code § 535.2" },
  KS: { name: "Kansas",         rate: 10.00, statute: "K.S.A. § 16-201" },
  KY: { name: "Kentucky",       rate: 8.00,  statute: "KRS § 360.010" },
  LA: { name: "Louisiana",      rate: 5.00,  statute: "La. Civ. Code art. 2924" },
  ME: { name: "Maine",          rate: 6.00,  statute: "Me. Rev. Stat. tit. 9-A § 9-201" },
  MD: { name: "Maryland",       rate: 6.00,  statute: "Md. Courts § 11-107" },
  MA: { name: "Massachusetts",  rate: 12.00, statute: "Mass. Gen. Laws ch. 231 § 6C" },
  MI: { name: "Michigan",       rate: 5.00,  statute: "MCL § 438.31" },
  MN: { name: "Minnesota",      rate: 10.00, statute: "Minn. Stat. § 334.01" },
  MS: { name: "Mississippi",    rate: 8.00,  statute: "Miss. Code Ann. § 75-17-1" },
  MO: { name: "Missouri",       rate: 9.00,  statute: "Mo. Rev. Stat. § 408.020" },
  MT: { name: "Montana",        rate: 10.00, statute: "Mont. Code Ann. § 31-1-106" },
  NE: { name: "Nebraska",       rate: 6.00,  statute: "Neb. Rev. Stat. § 45-101.04" },
  NV: { name: "Nevada",         rate: 5.50,  statute: "NRS § 99.040" },
  NH: { name: "New Hampshire",  rate: 10.00, statute: "RSA 336:1" },
  NJ: { name: "New Jersey",     rate: 6.00,  statute: "N.J.S.A. § 31:1-1" },
  NM: { name: "New Mexico",     rate: 8.75,  statute: "NMSA § 56-8-4" },
  NY: { name: "New York",       rate: 9.00,  statute: "N.Y. CPLR § 5004" },
  NC: { name: "North Carolina", rate: 8.00,  statute: "N.C. Gen. Stat. § 24-1" },
  ND: { name: "North Dakota",   rate: 6.00,  statute: "N.D. Cent. Code § 47-14-05" },
  OH: { name: "Ohio",           rate: 5.00,  statute: "ORC § 1343.01" },
  OK: { name: "Oklahoma",       rate: 6.00,  statute: "15 Okla. Stat. § 266" },
  OR: { name: "Oregon",         rate: 9.00,  statute: "ORS § 82.010" },
  PA: { name: "Pennsylvania",   rate: 6.00,  statute: "41 P.S. § 202" },
  RI: { name: "Rhode Island",   rate: 12.00, statute: "R.I. Gen. Laws § 9-21-10" },
  SC: { name: "South Carolina", rate: 8.75,  statute: "S.C. Code Ann. § 34-31-20" },
  SD: { name: "South Dakota",   rate: 15.00, statute: "SDCL § 54-3-5" },
  TN: { name: "Tennessee",      rate: 10.00, statute: "Tenn. Code Ann. § 47-14-103" },
  TX: { name: "Texas",          rate: 6.00,  statute: "Tex. Fin. Code § 302.002" },
  UT: { name: "Utah",           rate: 10.00, statute: "Utah Code § 15-1-1" },
  VT: { name: "Vermont",        rate: 12.00, statute: "9 V.S.A. § 41a" },
  VA: { name: "Virginia",       rate: 6.00,  statute: "Va. Code Ann. § 6.2-301" },
  WA: { name: "Washington",     rate: 12.00, statute: "RCW § 19.52.010" },
  WV: { name: "West Virginia",  rate: 6.00,  statute: "W. Va. Code § 47-6-5" },
  WI: { name: "Wisconsin",      rate: 5.00,  statute: "Wis. Stat. § 138.04" },
  WY: { name: "Wyoming",        rate: 7.00,  statute: "Wyo. Stat. § 40-14-106" },
};

function fmtUsd(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function generatePdf(fields: {
  invoiceAmount: string;
  dueDate: string;
  paymentDate: string;
  stateCode: string;
  generatedDate: string;
}): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 72, size: "LETTER" });

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const amount = parseFloat(fields.invoiceAmount) || 0;
    const due = new Date(fields.dueDate + "T00:00:00");
    const paid = new Date(fields.paymentDate + "T00:00:00");
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysOverdue = Math.max(0, Math.floor((paid.getTime() - due.getTime()) / msPerDay));
    const stateData = STATE_RATES[fields.stateCode];
    const dailyRate = stateData ? stateData.rate / 100 / 365 : 0;
    const lateFee = amount * dailyRate * daysOverdue;
    const totalDue = amount + lateFee;

    const NAVY = "#1e3a8a";
    const SLATE = "#475569";
    const GREEN = "#16a34a";
    const AMBER = "#d97706";
    const pageWidth = 8.5 * 72;
    const contentWidth = pageWidth - 144;

    // ── Header bar ──
    doc.rect(0, 0, pageWidth, 80).fill(NAVY);
    doc.fillColor("white").fontSize(20).font("Helvetica-Bold")
      .text("Invoice Late Fee Report", 72, 24);
    doc.fontSize(10).font("Helvetica")
      .text(`Generated ${fields.generatedDate} · DemandFlowww.com`, 72, 52);

    doc.fillColor("#1e293b").moveDown(2);

    // ── Invoice Details ──
    doc.fontSize(13).font("Helvetica-Bold").fillColor(NAVY)
      .text("Invoice Details", 72, 100);
    doc.moveTo(72, 118).lineTo(72 + contentWidth, 118).strokeColor("#e2e8f0").lineWidth(1).stroke();

    const detailY = 126;
    const col2 = 300;

    doc.fontSize(10).font("Helvetica").fillColor(SLATE)
      .text("Invoice Amount:", 72, detailY)
      .text(`$${fmtUsd(amount)}`, col2, detailY)
      .text("Due Date:", 72, detailY + 18)
      .text(fields.dueDate, col2, detailY + 18)
      .text("Payment / Calculation Date:", 72, detailY + 36)
      .text(fields.paymentDate, col2, detailY + 36)
      .text("State:", 72, detailY + 54)
      .text(stateData ? `${stateData.name} (${fields.stateCode})` : fields.stateCode, col2, detailY + 54);

    // ── Your State Analysis ──
    doc.fontSize(13).font("Helvetica-Bold").fillColor(NAVY)
      .text("Your State Analysis", 72, detailY + 90);
    doc.moveTo(72, detailY + 108).lineTo(72 + contentWidth, detailY + 108)
      .strokeColor("#e2e8f0").lineWidth(1).stroke();

    const analysisY = detailY + 116;
    doc.fontSize(10).font("Helvetica").fillColor(SLATE)
      .text("Statutory Annual Rate:", 72, analysisY)
      .text(stateData ? `${stateData.rate.toFixed(2)}%` : "N/A", col2, analysisY)
      .text("Statutory Authority:", 72, analysisY + 18)
      .text(stateData?.statute ?? "N/A", col2, analysisY + 18)
      .text("Days Overdue:", 72, analysisY + 36)
      .text(`${daysOverdue} days`, col2, analysisY + 36)
      .text("Late Fee Amount:", 72, analysisY + 54)
      .fillColor(AMBER).text(`+$${fmtUsd(lateFee)}`, col2, analysisY + 54)
      .fillColor(SLATE)
      .text("Total Due:", 72, analysisY + 72)
      .font("Helvetica-Bold").fillColor(GREEN)
      .text(`$${fmtUsd(totalDue)}`, col2, analysisY + 72);

    // ── Payment Timeline ──
    doc.font("Helvetica-Bold").fillColor(NAVY).fontSize(13)
      .text("Payment Timeline", 72, analysisY + 108);
    doc.moveTo(72, analysisY + 126).lineTo(72 + contentWidth, analysisY + 126)
      .strokeColor("#e2e8f0").lineWidth(1).stroke();

    const timelineY = analysisY + 134;
    const milestones = [
      { day: 0,   label: "Invoice due",         desc: "Payment was expected by this date." },
      { day: 30,  label: "30 days overdue",      desc: `$${fmtUsd(amount * dailyRate * 30)} in interest accrued.` },
      { day: 60,  label: "60 days overdue",      desc: `$${fmtUsd(amount * dailyRate * 60)} in interest accrued.` },
      { day: 90,  label: "90 days overdue",      desc: `$${fmtUsd(amount * dailyRate * 90)} in interest accrued. Small claims threshold for many states.` },
      { day: daysOverdue, label: `Today (${daysOverdue} days)`, desc: `Current total due: $${fmtUsd(totalDue)}.` },
    ];

    milestones.forEach((m, i) => {
      const y = timelineY + i * 22;
      doc.circle(80, y + 5, 4).fill(m.day === daysOverdue ? GREEN : "#cbd5e1");
      doc.font("Helvetica-Bold").fillColor("#1e293b").fontSize(9)
        .text(`Day ${m.day} — ${m.label}`, 92, y);
      doc.font("Helvetica").fillColor(SLATE).fontSize(8)
        .text(m.desc, 92, y + 10);
    });

    // ── All 50 States Comparison ──
    doc.addPage();

    doc.rect(0, 0, pageWidth, 50).fill(NAVY);
    doc.fillColor("white").fontSize(16).font("Helvetica-Bold")
      .text("All 50 States — Statutory Interest Rate Comparison", 72, 16);

    doc.fillColor("#1e293b");

    const tableTop = 70;
    const colW = [180, 60, 180, 60];
    const colX = [72, 252, 312, 492];

    // Table header
    doc.rect(72, tableTop, contentWidth, 18).fill("#f1f5f9");
    doc.font("Helvetica-Bold").fontSize(9).fillColor("#1e293b");
    doc.text("State", colX[0], tableTop + 4);
    doc.text("Rate", colX[1], tableTop + 4);
    doc.text("State", colX[2], tableTop + 4);
    doc.text("Rate", colX[3], tableTop + 4);

    const sorted = Object.entries(STATE_RATES).sort((a, b) =>
      a[1].name.localeCompare(b[1].name),
    );

    const half = Math.ceil(sorted.length / 2);
    const leftCol = sorted.slice(0, half);
    const rightCol = sorted.slice(half);

    const rowH = 14;
    leftCol.forEach(([code, data], i) => {
      const y = tableTop + 22 + i * rowH;
      if (i % 2 === 0) {
        doc.rect(72, y - 2, contentWidth, rowH).fill("#f8fafc");
      }
      const isSelected = code === fields.stateCode;
      doc.font(isSelected ? "Helvetica-Bold" : "Helvetica")
        .fontSize(8)
        .fillColor(isSelected ? NAVY : "#334155")
        .text(`${data.name} (${code})`, colX[0], y);
      doc.fillColor(data.rate >= 10 ? AMBER : isSelected ? NAVY : SLATE)
        .text(`${data.rate.toFixed(2)}%`, colX[1], y);

      const right = rightCol[i];
      if (right) {
        const [rCode, rData] = right;
        const rSelected = rCode === fields.stateCode;
        doc.font(rSelected ? "Helvetica-Bold" : "Helvetica")
          .fillColor(rSelected ? NAVY : "#334155")
          .text(`${rData.name} (${rCode})`, colX[2], y);
        doc.fillColor(rData.rate >= 10 ? AMBER : rSelected ? NAVY : SLATE)
          .text(`${rData.rate.toFixed(2)}%`, colX[3], y);
      }
    });

    // ── Demand Letter Template ──
    doc.addPage();

    doc.rect(0, 0, pageWidth, 50).fill(NAVY);
    doc.fillColor("white").fontSize(16).font("Helvetica-Bold")
      .text("Demand Letter Template", 72, 16);

    const letterY = 70;
    doc.fontSize(10).font("Helvetica").fillColor("#1e293b")
      .text(fields.generatedDate, 72, letterY);

    doc.moveDown(0.5);
    doc.text("[Client Name]");
    doc.text("[Client Address]");
    doc.moveDown(0.5);
    doc.text("Re: Invoice — Demand for Payment", { underline: true });
    doc.moveDown(0.5);
    doc.text("Dear [Client Name],");
    doc.moveDown(0.5);

    const bodyText = [
      `This letter serves as formal notice that the sum of $${fmtUsd(totalDue)} is now overdue and payable immediately. The original invoice amount of $${fmtUsd(amount)} was due on ${fields.dueDate}. As of ${fields.paymentDate}, statutory interest of $${fmtUsd(lateFee)} has accrued under ${stateData?.statute ?? "applicable state law"} (${stateData?.rate.toFixed(2) ?? "N/A"}% per annum).`,
      `Demand is hereby made for payment of $${fmtUsd(totalDue)} in full within ten (10) days of the date of this letter. If payment is not received by that date, I reserve all rights and remedies available under applicable law, including but not limited to filing a claim in small claims court.`,
      "Please remit payment to the address above or contact me immediately to arrange an alternative resolution.",
    ];

    bodyText.forEach((para) => {
      doc.text(para, { lineGap: 2 });
      doc.moveDown(0.5);
    });

    doc.moveDown(0.5);
    doc.text("Sincerely,");
    doc.moveDown(2);
    doc.text("______________________________");
    doc.text("[Your Name]");
    doc.text("[Your Address]");
    doc.text("[Your Email / Phone]");

    // ── Footer disclaimer ──
    doc.rect(0, 10.5 * 72, pageWidth, 40).fill("#f8fafc");
    doc.fontSize(7).font("Helvetica").fillColor("#94a3b8")
      .text(
        "DISCLAIMER: This report is provided for informational purposes only. Interest rates are based on publicly available state statutes and may not reflect recent legislative changes. DemandFlowww is not a law firm and does not provide legal advice. Verify current rates and consult a licensed attorney for your specific situation.",
        72,
        10.5 * 72 + 8,
        { width: contentWidth },
      );

    doc.end();
  });
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return Response.json({ error: "Missing session_id." }, { status: 400 });
  }

  let fields: {
    invoiceAmount: string;
    dueDate: string;
    paymentDate: string;
    stateCode: string;
  };

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return Response.json({ error: "Payment not completed." }, { status: 402 });
    }

    const meta = session.metadata ?? {};
    if (meta.product !== "invoice-guard-report") {
      return Response.json({ error: "Invalid session." }, { status: 400 });
    }

    fields = {
      invoiceAmount: meta.invoiceAmount ?? "",
      dueDate: meta.dueDate ?? "",
      paymentDate: meta.paymentDate ?? "",
      stateCode: meta.stateCode ?? "",
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to verify session.";
    return Response.json({ error: message }, { status: 500 });
  }

  const generatedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  try {
    const pdfBuffer = await generatePdf({ ...fields, generatedDate });
    return new Response(pdfBuffer as unknown as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="invoice-late-fee-report.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "PDF generation failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}
