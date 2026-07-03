import { NextRequest } from "next/server";
import { getTemplate, type TemplateId } from "@/lib/templates";
import { renderTemplateHtml } from "@/lib/letter";
import { hasActivePro } from "@/lib/pro";

export const runtime = "nodejs";

// Dynamic import — archiver is ESM-only
const archiverPromise = import("archiver").then((m) => m.default);

interface LetterData {
  template: string;
  fields: Record<string, string>;
}

/**
 * POST /api/batch-export
 * Accepts an array of letter data objects, generates each as HTML,
 * and returns a ZIP file containing all letters.
 * Requires a valid Pro subscription (verified via email).
 */
export async function POST(request: NextRequest) {
  let body: { email?: string; letters?: LetterData[] };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const letters = Array.isArray(body.letters) ? body.letters : [];

  if (!email) {
    return Response.json({ error: "Email is required." }, { status: 400 });
  }

  if (letters.length === 0) {
    return Response.json({ error: "No letters to export." }, { status: 400 });
  }

  // Verify Pro subscription
  const isPro = await hasActivePro(email);
  if (!isPro) {
    return Response.json(
      { error: "Batch export requires a Pro subscription." },
      { status: 403 },
    );
  }

  // Limit to 50 letters per export to prevent abuse
  if (letters.length > 50) {
    return Response.json(
      { error: "Maximum 50 letters per export." },
      { status: 400 },
    );
  }

  try {
    const archiver = await archiverPromise;
    const archive = archiver("zip", { zlib: { level: 9 } });
    const chunks: Buffer[] = [];

    archive.on("data", (chunk: Buffer) => chunks.push(chunk));

    const archivePromise = new Promise<Buffer>((resolve, reject) => {
      archive.on("end", () => resolve(Buffer.concat(chunks)));
      archive.on("error", reject);
    });

    // Generate each letter and add to archive
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const templateId = (letter.template || "demand-letter") as TemplateId;
      const template = getTemplate(templateId);

      if (!template) continue;

      let html: string;
      try {
        html = renderTemplateHtml(templateId, letter.fields);
      } catch {
        // Skip letters that fail to render
        continue;
      }

      const filename = `letter-${i + 1}-${templateId}.html`;
      archive.append(html, { name: filename });
    }

    // Also include an index file
    const indexHtml = generateIndexHtml(letters);
    archive.append(indexHtml, { name: "index.html" });

    await archive.finalize();
    const zipBuffer = await archivePromise;

    return new Response(
      new Uint8Array(zipBuffer.buffer, zipBuffer.byteOffset, zipBuffer.byteLength),
      {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="demandflow-letters-export.zip"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Export failed.";
    return Response.json({ error: message }, { status: 500 });
  }
}

function generateIndexHtml(letters: LetterData[]): string {
  const items = letters
    .map((letter, i) => {
      const templateId = (letter.template || "demand-letter") as TemplateId;
      const template = getTemplate(templateId);
      const recipient =
        letter.fields?.clientName ||
        letter.fields?.recipientName ||
        letter.fields?.tenantName ||
        "—";
      const date = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      return `<tr>
        <td style="padding:8px;border-bottom:1px solid #e2e8f0;">${i + 1}</td>
        <td style="padding:8px;border-bottom:1px solid #e2e8f0;">${template?.name || templateId}</td>
        <td style="padding:8px;border-bottom:1px solid #e2e8f0;">${recipient}</td>
        <td style="padding:8px;border-bottom:1px solid #e2e8f0;">${date}</td>
      </tr>`;
    })
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>DemandFlowww — Letter Export Index</title>
<style>
  body { font-family: system-ui, sans-serif; max-width: 720px; margin: 40px auto; padding: 0 20px; color: #1f2937; }
  h1 { font-size: 24px; margin-bottom: 8px; }
  table { width: 100%; border-collapse: collapse; margin-top: 20px; }
  th { text-align: left; padding: 8px; border-bottom: 2px solid #e2e8f0; font-size: 12px; text-transform: uppercase; color: #64748b; }
</style>
</head>
<body>
  <h1>DemandFlowww Letter Export</h1>
  <p>Generated on ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
  <p>${letters.length} letter(s) exported.</p>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Template</th>
        <th>Recipient</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>${items}</tbody>
  </table>
</body>
</html>`;
}
