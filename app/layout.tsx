import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/error-boundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ignacio Ventura - Frontend Developer",
  description:
    "Frontend Developer especializado en React, Next.js, TypeScript y tecnologías web modernas. Creando experiencias web únicas con código limpio y diseño responsive.",
  generator: "Next.js",
  metadataBase: new URL("https://nachthelad.com.ar"),
  verification: {
    google: "p0A5gsNea8EXWAk0pXeMMRz2Wm195rtYLme0hQY-tbQ",
  },
  alternates: {
    canonical: "https://nachthelad.com.ar",
  },
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Desarrollo Web",
    "Portfolio",
    "JavaScript",
    "Tailwind CSS",
    "Web Developer Argentina",
  ],
  authors: [{ name: "Ignacio Ventura" }],
  creator: "Ignacio Ventura",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ignacio Ventura - Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js, TypeScript y tecnologías web modernas. Creando experiencias web únicas con código limpio y diseño responsive.",
    url: "https://nachthelad.com.ar",
    siteName: "Ignacio Ventura Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://nachthelad.com.ar/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ignacio Ventura - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignacio Ventura - Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js, TypeScript y tecnologías web modernas.",
    creator: "@nachthelad",
    images: ["https://nachthelad.com.ar/og-image.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ignacio Ventura",
    jobTitle: "Frontend Developer",
    url: "https://nachthelad.com.ar",
    sameAs: [
      "https://github.com/nachthelad",
      "https://linkedin.com/in/ignacio-ventura",
      "https://twitter.com/nachthelad",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "Tailwind CSS",
    ],
    description:
      "Frontend Developer especializado en React, Next.js, TypeScript y tecnologías web modernas.",
  };

  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <div className="min-h-screen bg-background text-foreground">
            {children}
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
