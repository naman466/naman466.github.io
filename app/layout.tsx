import type { Metadata } from 'next'
import { Caveat, Kalam } from 'next/font/google'
import './globals.css'
import './notebook.css'

const hand = Kalam({ subsets: ['latin'], weight: ['400', '700'], variable: '--hand' })
const marker = Caveat({ subsets: ['latin'], weight: ['700'], variable: '--marker' })

export const metadata: Metadata = {
  title: 'Naman Tyagi',
  description: 'Naman Tyagi: systems and low-level programming, MS CS at Northeastern University',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${hand.variable} ${marker.variable}`}>
      <body>{children}</body>
    </html>
  )
}
