"use client";

interface Props {
  steps: string[];
  current: number;
}

export function StepProgressBar({ steps, current }: Props) {
  return (
    <div className="flex items-start">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-1 items-start">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition ${
                i < current
                  ? "bg-blue-600 text-white"
                  : i === current
                    ? "border-2 border-blue-600 bg-white text-blue-600"
                    : "border-2 border-slate-300 bg-white text-slate-400"
              }`}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className={`mt-1.5 text-center text-xs font-medium leading-tight ${
                i <= current ? "text-slate-700" : "text-slate-400"
              }`}
            >
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`mx-1 mt-4 h-0.5 flex-1 transition ${
                i < current ? "bg-blue-600" : "bg-slate-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
