import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "@/components/error-boundary";
import { WebVitals } from "@/components/web-vitals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ignacio Ventura",
  description:
    "Me gusta vibecodear cosas que se me vienen a la cabeza, compartirlas e ir mejorándolas con el feedback de quienes las prueban.",
  generator: "Next.js",
  metadataBase: new URL("https://nachthelad.com.ar"),
  verification: {
    google: "p0A5gsNea8EXWAk0pXeMMRz2Wm195rtYLme0hQY-tbQ",
  },
  alternates: {
    canonical: "https://nachthelad.com.ar",
  },
  manifest: "/manifest.json",
  keywords: [
    "Vibe Coder",
    "React",
    "Next.js",
    "TypeScript",
    "Desarrollo Web",
    "Portfolio",
    "JavaScript",
    "Tailwind CSS",
    "Web Developer Argentina",
    "Creative Coding",
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
    title: "Ignacio Ventura",
    description:
      "Me gusta vibecodear cosas que se me vienen a la cabeza, compartirlas e ir mejorándolas con el feedback de quienes las prueban.",
    url: "https://nachthelad.com.ar",
    siteName: "Ignacio Ventura Portfolio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignacio Ventura",
    description:
      "Me gusta vibecodear cosas que se me vienen a la cabeza, compartirlas e ir mejorándolas con el feedback de quienes las prueban.",
    creator: "@nachthelad",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
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
    jobTitle: "Vibe coder",
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
      "Creative Coding",
      "Web Development",
      "Tailwind CSS",
      "UI/UX Design",
    ],
    description:
      "Vibe coder apasionado por crear experiencias web únicas con React, Next.js, TypeScript y tecnologías modernas.",
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:no-underline"
          >
            Saltar al contenido principal
          </a>
          <div className="min-h-screen bg-background text-foreground">
            <WebVitals />
            {children}
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
