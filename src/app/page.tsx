"use client"
import Link from 'next/link'
import { Award, Cog, ShieldCheck, Wrench } from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl pt-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-left leading-tight">
              Soluții de Automatizare Industrială și Machine Safety
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl text-left leading-relaxed text-white/80">
              Corox Engineering oferă servicii profesionale în domeniul automatizărilor industriale,
              Machine Safety, evaluărilor de risc și sistemelor tehnice integrate.
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
              cu accent pe calitate, siguranță și conformitate cu standardele europene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-8 pr-8">
              <div className="mb-6">
               
                  <ShieldCheck className="w-10 h-10 text-primary mb-4 flex items-center justify-center" />
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Machine Safety</h3>
                <p className="text-gray-600 text-left leading-relaxed">
                  Servicii complete de certificare și evaluare conform standardelor europene pentru echipamente industriale.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-8 pr-8">
              <div className="mb-6">
                <Cog className="w-10 h-10 text-primary mb-4 flex items-center justify-center" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Automatizări Industriale</h3>
                <p className="text-gray-600 text-left leading-relaxed">
                  Sisteme de automatizare și integrare de celule robotizate pentru optimizarea proceselor industriale.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-8 pr-8">
              <div className="mb-6">
                <Wrench className="w-10 h-10 text-primary mb-4 flex items-center justify-center" />
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Sisteme Tehnice</h3>
                <p className="text-gray-600 text-left leading-relaxed">
                  Structuri metalice și instalații electrice pentru industria modernă și aplicații comerciale.
                </p>
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
  );
}
