import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import RetirementCalculator from "./RetirementCalculator";

export const metadata: Metadata = {
  title: "Retirement Calculator — Social Security + 401(k) Projections | DemandFlowww",
  description:
    "Free retirement calculator: estimate your 401(k) balance, Social Security benefits, and total monthly income at retirement. Full PDF report for $9.",
  alternates: { canonical: `${SITE_URL}/retirement` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is my projected retirement savings calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We apply compound interest to your current savings plus monthly contributions over the years until your target retirement age, using your expected annual return rate.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Social Security estimate calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We estimate approximately 40% income replacement at full retirement age (67), then adjust for early or delayed claiming — benefits can be reduced up to 30% if claimed at 62, or increased up to 24% if delayed to age 70.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 4% withdrawal rule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 4% rule is a common guideline suggesting retirees can withdraw 4% of their portfolio annually with a high probability of not outliving their money over a 30-year retirement. Monthly withdrawal = (Savings × 4%) ÷ 12.",
      },
    },
    {
      "@type": "Question",
      name: "Is this calculator a substitute for professional financial advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This calculator is an educational tool only. Actual results depend on many factors including inflation, taxes, market volatility, and personal circumstances. Always consult a certified financial planner or fiduciary before making retirement decisions.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the $9 PDF report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The full report includes your detailed retirement projections, year-by-year savings growth, Social Security benefit estimates, monthly income breakdown, and a personalized summary formatted to share with your financial planner.",
      },
    },
  ],
};

export default function RetirementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RetirementCalculator />
    </>
  );
}
