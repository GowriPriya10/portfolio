import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GowriPriya Eppa - Portfolio',
  description: 'My Portfolio Website by Gowripriya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className="scroll-smooth">
      <head>
        <meta name="robots" content="all" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
