import type { Metadata } from 'next'
import { DM_Mono, Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'inkRL - Learning pages',
  description: 'Continuously optimized copy aligned to traffic intent & segment',
  openGraph: {
    title: 'inkRL - Learning pages',
    description: 'Continuously optimized copy aligned to traffic intent & segment',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmMono.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}

