import type { Metadata } from 'next'
import Image from 'next/image'
import ServiceCategory from '@/components/ServiceCategory'
import { serviceCategories } from '@/data/services'
import QuoteForm from '@/components/QuoteForm'
import SeitelPromoCard from '@/components/SeitelPromoCard'

export const metadata: Metadata = {
  title: 'Servicii Automatizări Industriale și Machine Safety | Corox Engineering Timișoara',
  description: 'Servicii complete de automatizare industrială, Machine Safety, evaluări de risc, instalații electrice industriale și sisteme tehnice integrate în Timișoara, Timiș și toată România.',
  keywords: 'automatizări industriale, Machine Safety, evaluări de risc, instalații electrice industriale, sisteme tehnice, Timișoara, Timiș, România, PLC SCADA, certificări CE, tablouri electrice',
  openGraph: {
    title: 'Servicii Automatizări Industriale și Machine Safety | Corox Engineering Timișoara',
    description: 'Servicii complete de automatizare industrială, Machine Safety și sisteme tehnice integrate în Timișoara, Timiș și toată România.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://coroxengineering.ro/servicii',
  },
  alternates: {
    canonical: 'https://coroxengineering.ro/servicii',
  },
}

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              Servicii de Automatizare Industrială și Machine Safety 
            </h1>
            <p className="text-xl max-w-2xl text-left leading-relaxed text-white/80">
              Corox Engineering oferă servicii complete de automatizare industrială, 
              Machine Safety și sisteme tehnice integrate pentru industria românească, 
              cu accent pe calitate, siguranță și conformitate cu standardele europene.
            </p>
          </div>
        </div>
      </section>

      {/* Centralized Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {serviceCategories.map((category) => (
            <section id={category.slug} key={category.id} className="scroll-mt-28">
              <ServiceCategory category={category} variant="long" />
            </section>
          ))}
        </div>
      </section>

      {/* Seitel Online Shop Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Magazin Online
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seitel - Magazinul Nostru Online
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descoperiți gama completă de produse și echipamente de securitate și smart home în magazinul nostru online
            </p>
          </div>
          
          <SeitelPromoCard />
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Cerere Ofertă
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Cerere de Ofertă pentru Servicii
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Contactați-ne pentru o ofertă personalizată pentru serviciile de care aveți nevoie
            </p>
          </div>
          <div className="border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  )
}
