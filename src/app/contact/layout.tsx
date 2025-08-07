import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Corox Engineering | Informații de Contact și Cerere Ofertă',
  description: 'Contactați Corox Engineering pentru servicii de automatizări industriale, certificări CE și soluții tehnice. Informații de contact și formular pentru cerere de ofertă.',
  keywords: 'contact Corox Engineering, cerere ofertă, automatizări industriale, certificări CE, România',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
