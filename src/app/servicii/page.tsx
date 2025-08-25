import type { Metadata } from 'next'
import Image from 'next/image'
import ServiceCategory from '@/components/ServiceCategory'
import { serviceCategories } from '@/data/services'
import QuoteForm from '@/components/QuoteForm'
import SeitelPromoCard from '@/components/SeitelPromoCard'
import ReactCookieBot from 'react-cookiebot';

const domainGroup = '7ef6150c-67e5-4230-9941-312c6ff61fd3'
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
      <ReactCookieBot domainGroupId={domainGroup} />
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Serviciile Noastre
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Gama Completă de Servicii
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Oferim soluții tehnice integrate pentru toate nevoile industriale, 
              de la automatizare la siguranță și certificări.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                id={category.slug}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Card Image/Icon Header */}
                <div className="relative h-64 bg-gradient-to-br from-primary/5 to-slate-50 flex items-center justify-center overflow-hidden">
                  {category.image ? (
                    <>
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                      <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <category.icon className="w-8 h-8 text-primary" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-28 h-28 bg-white/80 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <category.icon className="w-14 h-14 text-primary" />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-primary/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-slate-300 rounded-full"></div>
                    </>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {category.shortDescription}
                  </p>

                  {/* Service Groups */}
                  {category.groups && category.groups.length > 0 && (
                    <div className="space-y-3">
                      {category.groups.slice(0, 3).map((group) => (
                        <div key={group.name} className="border-l-2 border-slate-200 pl-4">
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">
                            {group.name}
                          </h4>
                          <div className="space-y-1">
                            {group.items.map((item) => (
                              <div key={item} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary/60 mt-2 flex-shrink-0 rounded-full"></div>
                                <span className="text-xs text-gray-600">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
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
