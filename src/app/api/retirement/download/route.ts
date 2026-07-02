import { NextRequest } from "next/server";
import PDFDocument from "pdfkit";
import { getStripe } from "@/lib/stripe";
import { calculateRetirement } from "@/lib/retirement-calc";

export const runtime = "nodejs";

function esc(s: string | undefined): string {
  return s ?? "";
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function balanceAt(
  principal: number,
  monthlyContrib: number,
  annualRate: number,
  years: number,
): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal + monthlyContrib * n;
  return (
    principal * Math.pow(1 + r, n) +
    monthlyContrib * ((Math.pow(1 + r, n) - 1) / r)
  );
}

function generateRetirementPdf(fields: Record<string, string>): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 72, size: "LETTER" });

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const currentAge = parseInt(esc(fields.currentAge) || "30", 10);
    const retirementAge = parseInt(esc(fields.retirementAge) || "65", 10);
    const currentIncome = parseFloat(esc(fields.currentIncome).replace(/,/g, "") || "0");
    const currentSavings = parseFloat(esc(fields.currentSavings).replace(/,/g, "") || "0");
    const monthlyContribution = parseFloat(esc(fields.monthlyContribution).replace(/,/g, "") || "0");
    const expectedReturn = parseFloat(esc(fields.expectedReturn) || "7");

    const result = calculateRetirement({
      currentAge,
      currentIncome,
      currentSavings,
      monthlyContribution,
      retirementAge,
      expectedReturn,
    });

    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const left = doc.page.margins.left;
    const contentWidth = doc.page.width - 144;
    const colWidth = contentWidth / 2;

    // ── Header bar ──
    doc.rect(72, 72, contentWidth, 4).fill("#1e3a8a");
    doc.moveDown(1);

    doc
      .font("Helvetica-Bold")
      .fontSize(18)
      .fillColor("#0f172a")
      .text("RETIREMENT PROJECTIONS REPORT", { align: "center" });

    doc.moveDown(0.3);
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor("#64748b")
      .text(`Generated: ${today}  |  DemandFlowww.com`, { align: "center" });

    doc.moveDown(1.5);
    doc.fillColor("#0f172a");

    // ── Inputs ──
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text("Your Inputs");
    doc.moveDown(0.3);
    doc.rect(left, doc.y, contentWidth, 1).fill("#e2e8f0");
    doc.moveDown(0.6);

    const inputs: [string, string][] = [
      ["Current Age", `${currentAge} years`],
      ["Target Retirement Age", `${retirementAge} years`],
      ["Years Until Retirement", `${result.yearsToRetirement} years`],
      ["Current Annual Income", fmt(currentIncome)],
      ["Current Retirement Savings", fmt(currentSavings)],
      ["Monthly Contribution", fmt(monthlyContribution)],
      ["Expected Annual Return", `${expectedReturn}%`],
    ];

    for (const [label, value] of inputs) {
      const y = doc.y;
      doc.font("Helvetica").fontSize(10).fillColor("#64748b").text(label, left, y, { width: colWidth, lineBreak: false });
      doc.font("Helvetica-Bold").fontSize(10).fillColor("#0f172a").text(value, left + colWidth, y, { width: colWidth });
      doc.moveDown(0.55);
    }

    doc.moveDown(1);

    // ── Results ──
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text("Projected Results");
    doc.moveDown(0.3);
    doc.rect(left, doc.y, contentWidth, 1).fill("#e2e8f0");
    doc.moveDown(0.6);

    const results: [string, string, string][] = [
      ["Projected Savings at Retirement", fmt(result.projectedSavings), "#1e3a8a"],
      ["Monthly Withdrawal (4% Rule)", `${fmt(result.monthlyWithdrawal)}/mo`, "#0f172a"],
      ["Estimated Social Security Benefit", `${fmt(result.socialSecurityEstimate)}/mo`, "#0f172a"],
      ["Total Estimated Monthly Income", `${fmt(result.totalMonthlyIncome)}/mo`, "#166534"],
    ];

    for (const [label, value, color] of results) {
      const y = doc.y;
      doc.font("Helvetica").fontSize(10).fillColor("#64748b").text(label, left, y, { width: colWidth, lineBreak: false });
      doc.font("Helvetica-Bold").fontSize(10).fillColor(color).text(value, left + colWidth, y, { width: colWidth });
      doc.moveDown(0.65);
    }

    doc.moveDown(1);

    // ── Year-by-year snapshot ──
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text("Savings Growth Snapshot");
    doc.moveDown(0.3);
    doc.rect(left, doc.y, contentWidth, 1).fill("#e2e8f0");
    doc.moveDown(0.6);

    const thirdWidth = contentWidth / 3;

    // Table header
    const hdrY = doc.y;
    doc.font("Helvetica-Bold").fontSize(9).fillColor("#64748b");
    doc.text("Years from Now", left, hdrY, { width: thirdWidth, lineBreak: false });
    doc.text("Age", left + thirdWidth, hdrY, { width: thirdWidth, lineBreak: false });
    doc.text("Projected Balance", left + thirdWidth * 2, hdrY, { width: thirdWidth });
    doc.moveDown(0.4);
    doc.rect(left, doc.y, contentWidth, 0.5).fill("#e2e8f0");
    doc.moveDown(0.4);

    const yearsToRet = result.yearsToRetirement;
    const intervals = [0, 5, 10, 15, 20, 25, 30].filter((y) => y <= yearsToRet);
    if (!intervals.includes(yearsToRet)) intervals.push(yearsToRet);

    for (const yr of intervals) {
      const age = currentAge + yr;
      const balance = balanceAt(currentSavings, monthlyContribution, expectedReturn, yr);
      const isRetirement = yr === yearsToRet;
      const rowY = doc.y;

      doc
        .font(isRetirement ? "Helvetica-Bold" : "Helvetica")
        .fontSize(10)
        .fillColor(isRetirement ? "#1e3a8a" : "#0f172a");

      doc.text(yr === 0 ? "Now" : `+${yr} years`, left, rowY, { width: thirdWidth, lineBreak: false });
      doc.text(`${age}`, left + thirdWidth, rowY, { width: thirdWidth, lineBreak: false });
      doc.text(
        isRetirement ? `${fmt(balance)} ← retirement` : fmt(balance),
        left + thirdWidth * 2,
        rowY,
        { width: thirdWidth },
      );
      doc.moveDown(0.5);
    }

    doc.moveDown(1);

    // ── Assumptions ──
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text("Key Assumptions");
    doc.moveDown(0.3);
    doc.rect(left, doc.y, contentWidth, 1).fill("#e2e8f0");
    doc.moveDown(0.6);

    const assumptions = [
      "Compound interest applied monthly throughout the accumulation period.",
      "Social Security estimated at 40% income replacement at full retirement age (67), adjusted for early or delayed claiming per SSA guidelines.",
      "Monthly withdrawal based on the 4% safe withdrawal rate guideline (annual).",
      "Projections do not account for inflation, taxes on distributions, healthcare costs, or future changes to Social Security policy.",
    ];

    for (const line of assumptions) {
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor("#475569")
        .text(`• ${line}`, left, doc.y, { width: contentWidth, lineGap: 2 });
      doc.moveDown(0.4);
    }

    doc.moveDown(1);

    // ── Disclaimer ──
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor("#94a3b8")
      .text(
        "DISCLAIMER: This report is generated by DemandFlowww for educational purposes only and does not constitute financial, investment, tax, or legal advice. Projections are estimates based on assumptions — actual results will vary. Consult a certified financial planner (CFP) or fiduciary advisor before making any retirement or investment decisions.",
        left,
        doc.y,
        { width: contentWidth, lineGap: 2 },
      );

    // ── Footer bar ──
    doc.moveDown(1.5);
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor("#94a3b8")
      .text(`Generated by DemandFlowww.com — ${today}`, { align: "center" });

    doc.rect(72, doc.page.height - 72, contentWidth, 2).fill("#1e3a8a");

    doc.end();
  });
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return Response.json({ error: "Missing session_id." }, { status: 400 });
  }

  let session;
  try {
    const stripe = getStripe();
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return Response.json({ error: "Session not found." }, { status: 404 });
  }

  if (session.payment_status !== "paid") {
    return Response.json(
      { error: "Payment not completed for this session." },
      { status: 402 },
    );
  }

  const metadata = session.metadata ?? {};

  if (!metadata.currentAge || !metadata.retirementAge) {
    return Response.json(
      { error: "Retirement details are missing from this session." },
      { status: 422 },
    );
  }

  const pdfBuffer = await generateRetirementPdf(metadata);

  return new Response(pdfBuffer as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="retirement-projections-report.pdf"`,
      "Cache-Control": "no-store",
    },
  });
}
