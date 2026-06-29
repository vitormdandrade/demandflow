import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import GtmPageView from "@/components/GtmPageView";
import { GTM_ID } from "@/lib/gtm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://demandflow-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DemandFlow — Send a Demand Letter in 60 Seconds | $29",
  description:
    "DemandFlow helps freelancers get paid. Generate a professional, legally-formatted demand letter for an unpaid invoice in 60 seconds — no lawyer needed. One-time $29.",
  keywords: [
    "demand letter",
    "freelancer unpaid invoice",
    "get paid freelance",
    "demand letter generator",
    "unpaid invoice letter",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "DemandFlow",
    title: "DemandFlow — Send a Demand Letter in 60 Seconds | $29",
    description:
      "Generate a professional demand letter for an unpaid invoice in 60 seconds. No lawyer needed. One-time $29.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DemandFlow — Send a Demand Letter in 60 Seconds | $29",
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

        <Suspense fallback={null}>
          <GtmPageView />
        </Suspense>

        {children}
        <Footer />
      </body>
    </html>
  );
}
