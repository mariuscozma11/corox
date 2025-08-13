import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corox Engineering - Soluții de Automatizare Industrială și Machine Safety',
  description: 'Corox Engineering oferă soluții profesionale în domeniul automatizărilor industriale, Machine Safety, evaluărilor de risc și sistemelor tehnice integrate.',
  keywords: 'automatizare industrială, Machine Safety, evaluări de risc, sisteme tehnice, inginerie, România',
  authors: [{ name: 'Corox Engineering' }],
  openGraph: {
    title: 'Corox Engineering - Soluții de Automatizare Industrială',
    description: 'Soluții profesionale în domeniul automatizărilor industriale și Machine Safety',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
