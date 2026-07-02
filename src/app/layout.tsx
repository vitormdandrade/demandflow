import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GtmPageView from "@/components/GtmPageView";
import { GTM_ID } from "@/lib/gtm";
import { GA4_ID } from "@/lib/ga";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DemandFlowww — Send a Demand Letter in 60 Seconds | $29",
  description: SITE_DESCRIPTION,
  keywords: [
    "demand letter",
    "demand letter for freelancer",
    "freelancer unpaid invoice",
    "get paid freelance",
    "demand letter generator",
    "unpaid invoice letter",
    "client not paying invoice",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "DemandFlowww — Send a Demand Letter in 60 Seconds | $29",
    description:
      "Generate a professional demand letter for an unpaid invoice in 60 seconds. No lawyer needed. One-time $29.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DemandFlowww — Send a Demand Letter in 60 Seconds | $29",
    description:
      "Generate a professional demand letter for an unpaid invoice in 60 seconds. No lawyer needed. One-time $29.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (loads the container + initializes dataLayer) */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-base" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
        </Script>

        <Suspense fallback={null}>
          <GtmPageView />
        </Suspense>

        <Header />
        {children}
        <Footer />

        {/* Structured data: Organization + SoftwareApplication */}
        <Script id="ld-json-org-app" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: SITE_NAME,
                url: SITE_URL,
                description:
                  "AI-powered demand letters that help freelancers get paid for unpaid invoices — no lawyer needed.",
              },
              {
                "@type": "SoftwareApplication",
                name: SITE_NAME,
                url: SITE_URL,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                offers: {
                  "@type": "Offer",
                  price: "29.00",
                  priceCurrency: "USD",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "1247",
                },
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
