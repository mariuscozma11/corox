import type { Metadata } from 'next'
import Script from "next/script";

export const metadata: Metadata = {
  title: 'Politica de Cookies - Corox Engineering | Timișoara, România',
  description: 'Politica de Cookies Corox Engineering. Informații despre utilizarea cookie-urilor pe site-ul nostru și opțiunile de consimțământ disponibile.',
  keywords: 'politica cookies, cookie-uri, consimțământ, Corox Engineering, Timișoara, România',
  openGraph: {
    title: 'Politica de Cookies - Corox Engineering | Timișoara, România',
    description: 'Politica de Cookies Corox Engineering. Informații despre utilizarea cookie-urilor pe site-ul nostru.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://coroxengineering.ro/politica-cookies',
    images: [
      {
        url: '/og-img.png',
        width: 1200,
        height: 630,
        alt: 'Politica de Cookies - Corox Engineering',
      },
    ],
  },
  alternates: {
    canonical: 'https://coroxengineering.ro/politica-cookies',
  },
}

export default function PoliticaCookies() {
  return (
    <main>
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
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl pt-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-left leading-tight">
                Politica de Cookies
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Declaration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8">
            <div className="prose max-w-none">
              <div id="CookieDeclaration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookiebot Declaration Script */}
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/7ef6150c-67e5-4230-9941-312c6ff61fd3/cd.js"
        type="text/javascript"
        async
      />
    </main>
  );
}
