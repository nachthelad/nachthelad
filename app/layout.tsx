import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ignacio Ventura - Frontend Developer",
  description: "Frontend Developer especializado en React, Next.js y tecnologías web modernas. Portfolio con proyectos de desarrollo web.",
  generator: 'Next.js',
  metadataBase: new URL('https://nachthelad.vercel.app'),
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Desarrollo Web', 'Portfolio'],
  authors: [{ name: 'Ignacio Ventura' }],
  creator: 'Ignacio Ventura',
  openGraph: {
    title: 'Ignacio Ventura - Frontend Developer',
    description: 'Frontend Developer especializado en React, Next.js y tecnologías web modernas. Portfolio con proyectos de desarrollo web.',
    url: 'https://nachthelad.vercel.app',
    siteName: 'Ignacio Ventura Portfolio',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignacio Ventura - Frontend Developer',
    description: 'Frontend Developer especializado en React, Next.js y tecnologías web modernas.',
    creator: '@nachthelad',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <ErrorBoundary>
          <div className="min-h-screen bg-background text-foreground">{children}</div>
        </ErrorBoundary>
      </body>
    </html>
  )
}
