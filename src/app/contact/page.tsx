import type { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact Corox Engineering - Timișoara, Timiș | Automatizări Industriale și Machine Safety',
  description: 'Contactați Corox Engineering în Timișoara, Timiș pentru servicii de automatizări industriale, Machine Safety și soluții tehnice. Informații de contact, locație și formular pentru cerere de ofertă.',
  keywords: 'contact Corox Engineering, Timișoara, Timiș, automatizări industriale, Machine Safety, cerere ofertă, România, adresa, telefon, email',
  openGraph: {
    title: 'Contact Corox Engineering - Timișoara, Timiș | Automatizări Industriale și Machine Safety',
    description: 'Contactați Corox Engineering în Timișoara, Timiș pentru servicii de automatizări industriale, Machine Safety și soluții tehnice.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://coroxengineering.ro/contact',
  },
  alternates: {
    canonical: 'https://coroxengineering.ro/contact',
  },
}

export default function Contact() {
  return <ContactContent />
} 