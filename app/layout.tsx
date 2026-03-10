import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  metadataBase: new URL('https://autonnomic.com'),
  title: {
    default: 'Autonnomic - AI Applications Transforming Every Industry',
    template: '%s | Autonnomic',
  },
  description:
    'Autonnomic builds cutting-edge AI applications that redefine how work is done across every industry. Autonomous intelligence for the future of business.',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: 'any' },
    ],
    shortcut: ['/favicon.ico', '/icon.png'],
    apple: ['/icon.png'],
  },
  openGraph: {
    type: 'website',
    url: 'https://autonnomic.com',
    title: 'Autonnomic - AI Applications Transforming Every Industry',
    description:
      'Autonnomic builds cutting-edge AI applications that redefine how work is done across every industry. Autonomous intelligence for the future of business.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Autonnomic logo and AI applications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonnomic - AI Applications Transforming Every Industry',
    description:
      'Autonnomic builds cutting-edge AI applications that redefine how work is done across every industry. Autonomous intelligence for the future of business.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://autonnomic.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
