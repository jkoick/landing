import "./css/style.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://verbosus.cz"),
  title: {
    default: "Verbosus | AI marketingový agent pro B2B firmy",
    template: "%s | Verbosus",
  },
  description:
    "Verbosus je AI marketingový agent, který automatizuje personalizovanou komunikaci se zákazníky a pomáhá B2B firmám škálovat prodej.",
  keywords: [
    "AI marketingový agent",
    "automatizace komunikace",
    "B2B marketing",
    "Verbosus",
    "lead generation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Verbosus | AI marketingový agent pro B2B firmy",
    description:
      "Verbosus je AI marketingový agent, který automatizuje personalizovanou komunikaci se zákazníky a pomáhá B2B firmám škálovat prodej.",
    url: "https://verbosus.cz/",
    siteName: "Verbosus",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verbosus | AI marketingový agent pro B2B firmy",
    description:
      "Verbosus je AI marketingový agent, který automatizuje personalizovanou komunikaci se zákazníky a pomáhá B2B firmám škálovat prodej.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter antialiased bg-slate-100 text-slate-100 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
