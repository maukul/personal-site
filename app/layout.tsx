import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ViewModeProvider } from '@/components/view-mode'
import { site } from '@/content'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': site.name,
  'jobTitle': site.role,
  'url': 'https://maukul.site',
  'sameAs': [
    site.links.github,
    site.links.upwork,
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://maukul.site'),
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    url: '/',
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* eslint-disable-next-line react-dom/no-dangerously-set-innerhtml -- static JSON-LD, no user input */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>
          <ViewModeProvider>
            {children}
            <Toaster position="bottom-center" />
          </ViewModeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
