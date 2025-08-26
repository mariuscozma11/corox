import type { Metadata } from 'next'
import HomeContent from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'Corox Engineering - Automatizări Industriale și Machine Safety | Timișoara, România',
  description: 'Corox Engineering oferă soluții complete de automatizare industrială, Machine Safety, evaluări de risc și sisteme tehnice integrate în Timișoara și toată România. Servicii profesionale de calitate europeană.',
  keywords: 'automatizări industriale, Machine Safety, evaluări de risc, sisteme tehnice, Timișoara, Timiș, România, PLC SCADA, certificări CE, instalații electrice industriale',
  openGraph: {
    title: 'Corox Engineering - Automatizări Industriale și Machine Safety | Timișoara, România',
    description: 'Soluții complete de automatizare industrială, Machine Safety și sisteme tehnice integrate în Timișoara și toată România.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://coroxengineering.ro',
    images: [
      {
        url: '/og-img.png',
        width: 1200,
        height: 630,
        alt: 'Corox Engineering - Automatizări Industriale și Machine Safety',
      },
    ],
  },
  alternates: {
    canonical: 'https://coroxengineering.ro',
  },
}

export default function Home() {
  return (
    <>
      <HomeContent />
    </>
  )
} 