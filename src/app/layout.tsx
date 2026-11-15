import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bondo2-1.github.io"),
  alternates: { canonical: "/" },
  title: "Mohamed Khaled — Automation Developer & Software Engineer",
  description: "Workflow automation, backend APIs, and container infrastructure. Projects and experience from Mohamed Khaled, a software engineer based in Giza, Egypt.",
  openGraph: {
    url: "/",
    title: "Mohamed Khaled — Automation Developer",
    description: "Automation workflows, backend systems, and the work behind them.",
    type: "website",
    images: [{ url: "/share.jpg", width: 1440, height: 900, alt: "Mohamed Khaled, Automation Developer & Software Engineer" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
  other: { "page-type": "service", "site-kind": "other" },
};

export const viewport: Viewport = { themeColor: "#e5e5e5", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="portfolio" data-type="service" data-radius="soft" data-buttons="solid" data-motion="" suppressHydrationWarning>
      <head>
        {/* Raw skill motion CSS is shared with its browser checks; application styling stays in globals.css. */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/taste/motion/motion.css" />
        {/* Client-approved palette, Anton/Inter/IBM Plex Mono, editorial hero, pill nav, dark footer; word-highlight in About. */}
        <link rel="preload" href="/assets/fonts/anton-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="modulepreload" href="/assets/taste/moments/moments.js" />
        <link rel="modulepreload" href="/assets/taste/moments/lib.js" />
        <link rel="modulepreload" href="/assets/taste/moments/word-highlight/moment.js" />
        <Script id="motion-guard" strategy="beforeInteractive">{`document.documentElement.classList.add('m-enter','mo-js');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500);`}</Script>
      </head>
      <body>
        {children}
        <Script src="/assets/taste/motion/motion.js" type="module" strategy="afterInteractive" />
        <Script src="/assets/taste/moments/moments.js" type="module" strategy="afterInteractive" />
        <Script src="/navigation.js" strategy="afterInteractive" />
        <Script src="/hero-mascot.js" strategy="afterInteractive" />
        <Script src="/experience-art.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
