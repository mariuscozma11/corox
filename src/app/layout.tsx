import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corox Engineering - Automatizări Industriale și Machine Safety | Timișoara, Timiș, România',
  description: 'Corox Engineering, cu sediul în Timișoara, Timiș, oferă soluții complete de automatizare industrială, Machine Safety, evaluări de risc și sisteme tehnice integrate pentru industria românească.',
  keywords: 'Corox Engineering, automatizări industriale, Machine Safety, evaluări de risc, sisteme tehnice, Timișoara, Timiș, România, inginerie industrială, PLC SCADA, certificări CE, instalații electrice industriale',
  authors: [{ name: 'Corox Engineering' }],
  creator: 'Corox Engineering',
  publisher: 'Corox Engineering',
  robots: 'index, follow',
  openGraph: {
    title: 'Corox Engineering - Automatizări Industriale și Machine Safety | Timișoara, Timiș, România',
    description: 'Corox Engineering, cu sediul în Timișoara, Timiș, oferă soluții complete de automatizare industrială, Machine Safety și sisteme tehnice integrate pentru industria românească.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Corox Engineering',
    url: 'https://coroxengineering.ro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corox Engineering - Automatizări Industriale și Machine Safety',
    description: 'Soluții complete de automatizare industrială, Machine Safety și sisteme tehnice integrate în Timișoara, Timiș și toată România.',
  },
  alternates: {
    canonical: 'https://coroxengineering.ro',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="7ef6150c-67e5-4230-9941-312c6ff61fd3"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />
      </head>
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
