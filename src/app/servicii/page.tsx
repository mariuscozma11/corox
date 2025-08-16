import type { Metadata } from 'next'
import Image from 'next/image'
import ServiceCategory from '@/components/ServiceCategory'
import { serviceCategories } from '@/data/services'
import QuoteForm from '@/components/QuoteForm'

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
              Servicii de Automatizare Industrială și Machine Safety în Timișoara
            </h1>
            <p className="text-xl max-w-2xl text-left leading-relaxed text-white/80">
              Corox Engineering, cu sediul în Timișoara, Timiș, oferă servicii complete de automatizare industrială, 
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
              Descoperiți gama completă de produse și echipamente industriale în magazinul nostru online
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-slate-400">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Logo and Description */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-6">
                  <Image 
                    src="/logo-seitel.webp" 
                    alt="Seitel Logo" 
                    width={80}
                    height={80}
                    className="h-20 w-auto mx-auto lg:mx-0"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Seitel.ro
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Magazinul nostru online oferă o gamă largă de produse de securitate, smart home, 
                  monitorizare și climatizare. Beneficiați de prețuri competitive, 
                  livrare rapidă și suport tehnic specializat.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">Produse de securitate și smart home</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">Sisteme de monitorizare și climatizare</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">Suport tehnic specializat și livrare rapidă</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="flex-shrink-0 text-center">
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Accesați Magazinul
                  </h4>
                  <p className="text-gray-600 mb-6 text-sm">
                    Vizitați Seitel.ro pentru a descoperi toate produsele disponibile
                  </p>
                  <a 
                    href="https://seitel.ro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Vizitează Seitel.ro
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
