"use client";

import { useState, useEffect } from "react";

export interface LetterheadData {
  brandName: string;
  brandAddress: string;
  brandPhone: string;
  brandLogo: string; // URL to logo image
}

const STORAGE_KEY = "demandflow_letterhead";

function loadLetterhead(): LetterheadData {
  if (typeof window === "undefined")
    return { brandName: "", brandAddress: "", brandPhone: "", brandLogo: "" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as LetterheadData;
  } catch {}
  return { brandName: "", brandAddress: "", brandPhone: "", brandLogo: "" };
}

function saveLetterhead(data: LetterheadData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

export function getLetterheadFields(): Partial<LetterheadData> {
  return loadLetterhead();
}

/**
 * Settings panel for Pro subscribers to customize their letterhead.
 * Stores data in localStorage so it persists across sessions.
 */
export default function LetterheadSettings() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<LetterheadData>(loadLetterhead);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setData(loadLetterhead());
  }, []);

  function update(field: keyof LetterheadData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  }

  function handleSave() {
    saveLetterhead(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-base">
            🏢
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Custom Letterhead
            </p>
            <p className="text-xs text-slate-500">
              {data.brandName
                ? `Configured: ${data.brandName}`
                : "Add your brand to letters"}
            </p>
          </div>
        </div>
        <span
          className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="border-t border-slate-100 px-5 py-4">
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lh-brand-name"
                className="text-xs font-medium text-slate-600"
              >
                Company / Brand Name
              </label>
              <input
                id="lh-brand-name"
                type="text"
                value={data.brandName}
                onChange={(e) => update("brandName", e.target.value)}
                placeholder="Your Company LLC"
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lh-brand-addr"
                className="text-xs font-medium text-slate-600"
              >
                Address
              </label>
              <input
                id="lh-brand-addr"
                type="text"
                value={data.brandAddress}
                onChange={(e) => update("brandAddress", e.target.value)}
                placeholder="123 Main St, San Francisco, CA 94103"
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lh-brand-phone"
                className="text-xs font-medium text-slate-600"
              >
                Phone
              </label>
              <input
                id="lh-brand-phone"
                type="text"
                value={data.brandPhone}
                onChange={(e) => update("brandPhone", e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="lh-brand-logo"
                className="text-xs font-medium text-slate-600"
              >
                Logo URL
              </label>
              <input
                id="lh-brand-logo"
                type="url"
                value={data.brandLogo}
                onChange={(e) => update("brandLogo", e.target.value)}
                placeholder="https://your-site.com/logo.png"
                className="w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/30"
              />
              {data.brandLogo && (
                <div className="mt-2 flex items-center gap-2">
                  <img
                    src={data.brandLogo}
                    alt="Logo preview"
                    className="max-h-10 max-w-[120px] rounded border border-slate-200 object-contain p-1"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <span className="text-xs text-slate-400">Preview</span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              {saved ? "✓ Saved!" : "Save Letterhead"}
            </button>

            <p className="text-center text-xs text-slate-400">
              Your letterhead appears on every letter you generate. Pro feature.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
