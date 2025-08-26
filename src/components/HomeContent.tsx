"use client"
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import ServicesSummary from '@/components/ServicesSummary'

export default function HomeContent() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Corox Engineering",
            "url": "https://coroxengineering.ro",
            "logo": "https://coroxengineering.ro/logo-color.svg",
            "description": "Corox Engineering oferă soluții complete de automatizare industrială, Machine Safety, evaluări de risc și sisteme tehnice integrate în Timișoara și toată România.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Str. Calea Lugojului Nr 134/3",
              "addressLocality": "Ghiroda",
              "addressRegion": "Timis",
              "addressCountry": "RO",
              "postalCode": "307200"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+40-256-201-077",
              "contactType": "customer service",
              "email": "office@coroxengineering.ro",
              "availableLanguage": "Romanian"
            },
            "sameAs": [
              "https://seitel.ro"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "Romania"
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Timisoara, Timis, Romania"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Servicii de Automatizare Industrială",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Machine Safety și Evaluări de Risc",
                    "description": "Servicii complete de Machine Safety și evaluări de risc pentru echipamente industriale"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Automatizări Industriale",
                    "description": "Soluții de automatizare industrială, PLC, SCADA și sisteme integrate"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalații Electrice Industriale",
                    "description": "Proiectare și execuție instalații electrice industriale și tablouri electrice"
                  }
                }
              ]
            }
          })
        }}
      />
      <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        
        <img 
          src="/BannerB.jpg" 
          alt="Corox Engineering" 
          className="absolute w-full h-full object-cover animate-fade-in" 
        />
        {/* Gradient overlay: left (100% opacity) to right (80% opacity), hidden on mobile */}
        <div className="hidden md:block absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-primary/100 to-primary/70"></div>
        </div>
        {/* Mobile-only solid background */}
        <div className="md:hidden absolute inset-0 bg-primary"></div>
        
        {/* Content */}
        <div className="relative z-10 py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl pt-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-left leading-tight">
                Automatizări Industriale și Machine Safety în Timișoara și România
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl text-left leading-relaxed text-white/80">
                Corox Engineering, cu sediul în Ghiroda, Timiș, oferă soluții complete de automatizare industrială,
                Machine Safety, evaluări de risc și sisteme tehnice integrate pentru industria românească.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contact"
                  className="bg-secondary text-primary px-8 py-4 font-semibold hover:bg-secondary/90 transition-all duration-300 flex items-center space-x-3"
                >
                  <span>Contactează-ne</span>
                </Link>
                <Link
                  href="/servicii"
                  className="border-2 border-secondary text-secondary px-8 py-4 font-semibold hover:bg-secondary hover:text-primary hover:border-primary   transition-all duration-300"
                >
                  Vezi Serviciile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Servicii Principale
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Despre Corox Engineering
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Suntem specializați în oferirea de soluții tehnice integrate pentru industria românească,
              cu accent pe calitate, siguranță și conformitate cu standardele europene. Cu sediul în Ghiroda, Timiș,
              servim clienții din toată România cu soluții de automatizare industrială și Machine Safety de înaltă calitate.
            </p>
          </div>

          <ServicesSummary />
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partenerul tău de încredere
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Suntem partenerul tău de încredere pentru toate nevoile de automatizare industrială, Machine Safety și soluții tehnice integrate
            </p>
          </div>

          

          <div className="text-center">
            <div className="bg-white rounded shadow-lg p-8 border-l-4 border-slate-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                De ce să ne alegeți pe noi?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Pentru că suntem partenerul tău de încredere în industria românească, cu experiență, 
                certificări internaționale și o echipă de profesioniști dedicați succesului tău.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold hover:bg-slate-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contactează-ne Acum
              </a>
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
              Cerere de Ofertă
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Contactați-ne pentru o ofertă personalizată pentru proiectul dumneavoastră.
              Echipa noastră vă va contacta în maxim 24 de ore.
            </p>
          </div>
          <div className="border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8">
            <QuoteForm />
          </div>
        </div>
              </section>
      </div>
    </>
  );
} 