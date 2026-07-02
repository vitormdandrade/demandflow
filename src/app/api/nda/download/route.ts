import { NextRequest } from "next/server";
import PDFDocument from "pdfkit";
import { getStripe } from "@/lib/stripe";
import { getNdaDoc, getNdaFieldKeys, type NdaDocType } from "@/lib/nda";

export const runtime = "nodejs";

function esc(s: string): string {
  return s.replace(/[<>&"']/g, (c) =>
    ({ "<": "<", ">": ">", "&": "&", '"': '"', "'": "'" })[c] ?? c,
  );
}

function addSection(
  doc: InstanceType<typeof PDFDocument>,
  title: string,
  body: string,
) {
  doc.moveDown(1);
  doc.font("Helvetica-Bold").fontSize(10).text(title);
  doc.moveDown(0.3);
  doc.font("Helvetica").fontSize(10).text(esc(body), { lineGap: 3 });
}

function signatureBlock(
  doc: InstanceType<typeof PDFDocument>,
  label1: string,
  label2: string,
  name1: string,
  name2: string,
) {
  doc.moveDown(2);
  const left = doc.page.margins.left;
  const right = doc.page.width - doc.page.margins.right;
  const colWidth = (right - left - 40) / 2;

  doc.font("Helvetica").fontSize(10);

  // Left signature
  doc
    .moveTo(left, doc.y)
    .lineTo(left + colWidth, doc.y)
    .stroke();
  doc.moveDown(0.4);
  doc.font("Helvetica-Bold").text(esc(name1), left, doc.y, { width: colWidth });
  doc.font("Helvetica").text(label1, left, doc.y, { width: colWidth });
  const afterLeft = doc.y;

  // Right signature (repositioned)
  const rightX = left + colWidth + 40;
  doc.moveUp(3.5);
  doc
    .moveTo(rightX, doc.y)
    .lineTo(rightX + colWidth, doc.y)
    .stroke();
  doc.moveDown(0.4);
  doc.font("Helvetica-Bold").text(esc(name2), rightX, doc.y, {
    width: colWidth,
  });
  doc.font("Helvetica").text(label2, rightX, doc.y, { width: colWidth });

  doc.y = afterLeft;
}

function generatePdf(
  docType: NdaDocType,
  fields: Record<string, string>,
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({ margin: 72, size: "LETTER" });

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const refNum = `DF-${docType.toUpperCase().slice(0, 3)}-${Math.floor(Math.random() * 900000 + 100000)}`;
    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Header bar
    doc
      .rect(72, 72, doc.page.width - 144, 4)
      .fill("#1e3a8a");

    doc.moveDown(1);

    // Title
    if (docType === "nda") {
      doc
        .font("Helvetica-Bold")
        .fontSize(18)
        .fillColor("#0f172a")
        .text("NON-DISCLOSURE AGREEMENT", { align: "center" });
    } else if (docType === "service-agreement") {
      doc
        .font("Helvetica-Bold")
        .fontSize(18)
        .fillColor("#0f172a")
        .text("SERVICE AGREEMENT", { align: "center" });
    } else {
      doc
        .font("Helvetica-Bold")
        .fontSize(18)
        .fillColor("#0f172a")
        .text("PARTNERSHIP AGREEMENT", { align: "center" });
    }

    doc.moveDown(0.4);
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor("#64748b")
      .text(`Ref: ${refNum}  |  Generated: ${today}`, { align: "center" });

    doc.moveDown(1.5);
    doc.fillColor("#0f172a");

    if (docType === "nda") {
      doc
        .font("Helvetica")
        .fontSize(10)
        .text(
          `This Non-Disclosure Agreement ("Agreement") is entered into as of ${esc(fields.effectiveDate || "the date of last signature")}, between:`,
        );
      doc.moveDown(0.8);
      doc
        .font("Helvetica-Bold")
        .text(`${esc(fields.party1Name)} `, { continued: true });
      doc.font("Helvetica").text(`("Disclosing Party")`);
      doc.moveDown(0.3);
      doc.font("Helvetica").text("and");
      doc.moveDown(0.3);
      doc
        .font("Helvetica-Bold")
        .text(`${esc(fields.party2Name)} `, { continued: true });
      doc.font("Helvetica").text(`("Receiving Party")`);

      addSection(
        doc,
        "1. CONFIDENTIAL INFORMATION",
        `The Disclosing Party may disclose to the Receiving Party certain confidential and proprietary information, including but not limited to: ${fields.description}`,
      );
      addSection(
        doc,
        "2. OBLIGATIONS OF RECEIVING PARTY",
        "The Receiving Party agrees to: (a) hold all Confidential Information in strict confidence; (b) not disclose Confidential Information to any third party without prior written consent of the Disclosing Party; (c) use Confidential Information solely for the purpose of evaluating a potential business relationship; and (d) protect Confidential Information using at least the same degree of care it uses to protect its own confidential information, but no less than reasonable care.",
      );
      addSection(
        doc,
        "3. TERM",
        `This Agreement shall remain in effect for ${fields.confidentialityPeriod || "2 years"} from the Effective Date, unless earlier terminated by mutual written agreement.`,
      );
      addSection(
        doc,
        "4. EXCEPTIONS",
        "The obligations of confidentiality do not apply to information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was rightfully known to the Receiving Party prior to disclosure; (c) is independently developed by the Receiving Party without use of Confidential Information; or (d) is required to be disclosed by applicable law or court order.",
      );
      addSection(
        doc,
        "5. GOVERNING LAW",
        `This Agreement shall be governed by and construed in accordance with the laws of the State of ${esc(fields.jurisdiction)}, without regard to its conflict of law provisions.`,
      );
      addSection(
        doc,
        "6. ENTIRE AGREEMENT",
        "This Agreement constitutes the entire agreement between the parties concerning the subject matter hereof and supersedes all prior agreements and understandings between the parties with respect to such subject matter.",
      );

      signatureBlock(
        doc,
        "Disclosing Party",
        "Receiving Party",
        fields.party1Name,
        fields.party2Name,
      );
    } else if (docType === "service-agreement") {
      doc
        .font("Helvetica")
        .fontSize(10)
        .text(
          `This Service Agreement ("Agreement") is entered into as of ${esc(fields.startDate || "the date of last signature")}, between:`,
        );
      doc.moveDown(0.8);
      doc
        .font("Helvetica-Bold")
        .text(`${esc(fields.party1Name)} `, { continued: true });
      doc.font("Helvetica").text(`("Service Provider")`);
      doc.moveDown(0.3);
      doc.font("Helvetica").text("and");
      doc.moveDown(0.3);
      doc
        .font("Helvetica-Bold")
        .text(`${esc(fields.party2Name)} `, { continued: true });
      doc.font("Helvetica").text(`("Client")`);

      addSection(
        doc,
        "1. SERVICES",
        `Service Provider agrees to provide the following services to Client: ${fields.serviceDescription}`,
      );
      addSection(
        doc,
        "2. COMPENSATION",
        `Client agrees to pay Service Provider a total of $${esc(fields.paymentAmount)} in accordance with the following payment terms: ${fields.paymentTerms}`,
      );
      addSection(
        doc,
        "3. TERM",
        `This Agreement commences on ${esc(fields.startDate)} and continues until the services are completed to Client's reasonable satisfaction, unless earlier terminated by either party with 14 days' written notice.`,
      );
      addSection(
        doc,
        "4. INDEPENDENT CONTRACTOR",
        "Service Provider is an independent contractor and not an employee of Client. Service Provider shall be solely responsible for all taxes, insurance, and other obligations arising from their status as an independent contractor.",
      );
      addSection(
        doc,
        "5. INTELLECTUAL PROPERTY",
        "Upon receipt of full payment, Service Provider assigns to Client all rights, title, and interest in and to any work product created specifically for Client under this Agreement.",
      );
      addSection(
        doc,
        "6. CONFIDENTIALITY",
        "Each party agrees to keep confidential any proprietary or confidential information of the other party disclosed in connection with this Agreement.",
      );
      addSection(
        doc,
        "7. GOVERNING LAW",
        `This Agreement shall be governed by and construed in accordance with the laws of the State of ${esc(fields.jurisdiction)}.`,
      );

      signatureBlock(
        doc,
        "Service Provider",
        "Client",
        fields.party1Name,
        fields.party2Name,
      );
    } else {
      // partnership-agreement
      doc
        .font("Helvetica")
        .fontSize(10)
        .text(
          `This Partnership Agreement ("Agreement") is entered into as of ${esc(fields.effectiveDate || "the date of last signature")}, between:`,
        );
      doc.moveDown(0.8);
      doc
        .font("Helvetica-Bold")
        .text(`${esc(fields.party1Name)} `, { continued: true });
      doc.font("Helvetica").text(`("Partner 1")`);
      doc.moveDown(0.3);
      doc.font("Helvetica").text("and");
      doc.moveDown(0.3);
      doc
        .font("Helvetica-Bold")
        .text(`${esc(fields.party2Name)} `, { continued: true });
      doc.font("Helvetica").text(`("Partner 2")`);

      addSection(
        doc,
        "1. BUSINESS PURPOSE",
        `The partners agree to carry on the following business: ${fields.businessPurpose}`,
      );
      addSection(
        doc,
        "2. PROFIT AND LOSS SHARING",
        `All profits and losses of the partnership shall be shared as follows: ${esc(fields.profitSplit)}. Each partner's share shall be credited to their capital account at the end of each fiscal year.`,
      );
      addSection(
        doc,
        "3. MANAGEMENT",
        "All decisions concerning the ordinary course of business shall require mutual agreement of the partners. Major decisions — including incurring debts above $5,000, entering into contracts with a term exceeding 12 months, or admitting a new partner — shall require unanimous written consent.",
      );
      addSection(
        doc,
        "4. CAPITAL CONTRIBUTIONS",
        "Each partner shall contribute such capital as mutually agreed in writing. No partner shall be required to make additional capital contributions without their written consent.",
      );
      addSection(
        doc,
        "5. TERM AND DISSOLUTION",
        `This Agreement commences on ${esc(fields.effectiveDate)} and continues until dissolved by mutual written agreement of all partners or by operation of law.`,
      );
      addSection(
        doc,
        "6. GOVERNING LAW",
        `This Agreement shall be governed by and construed in accordance with the laws of the State of ${esc(fields.jurisdiction)}.`,
      );

      signatureBlock(
        doc,
        "Partner 1",
        "Partner 2",
        fields.party1Name,
        fields.party2Name,
      );
    }

    // Footer
    doc.moveDown(2);
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor("#94a3b8")
      .text(`Generated by DemandFlow.com — ${today}`, { align: "center" });
    doc
      .rect(72, doc.page.height - 72, doc.page.width - 144, 2)
      .fill("#1e3a8a");

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
  const docType = (metadata.docType as NdaDocType) || "nda";
  const doc = getNdaDoc(docType);
  if (!doc) {
    return Response.json({ error: "Unknown document type." }, { status: 400 });
  }

  const fieldKeys = getNdaFieldKeys(docType);
  const fields: Record<string, string> = {};
  for (const key of fieldKeys) {
    if (typeof metadata[key] === "string") {
      fields[key] = metadata[key];
    }
  }

  if (!fields.party1Name) {
    return Response.json(
      { error: "Contract details are missing from this session." },
      { status: 422 },
    );
  }

  const pdfBuffer = await generatePdf(docType, fields);

  const filenames: Record<NdaDocType, string> = {
    nda: "non-disclosure-agreement.pdf",
    "service-agreement": "service-agreement.pdf",
    "partnership-agreement": "partnership-agreement.pdf",
  };

  return new Response(pdfBuffer as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filenames[docType]}"`,
      "Cache-Control": "no-store",
    },
  });
}
