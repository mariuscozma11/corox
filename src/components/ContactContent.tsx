"use client";
import QuoteForm from "@/components/QuoteForm";
import Map from "@/components/Map";
import { Clock, Mail, MapPinHouse, Phone } from "lucide-react";

export default function ContactContent() {
  return (
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
                Contactează-ne
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-3xl text-left leading-relaxed text-white/80">
                Corox Engineering, cu sediul în Ghiroda, Timiș, este aici să vă ajutăm cu soluțiile tehnice de care aveți
                nevoie. Contactați-ne pentru o consultație gratuită sau o ofertă
                personalizată.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <div className="mb-8">
                <div className="inline-block">
                  <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                    Contact
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6 text-left">
                  Informații de Contact
                </h2>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-6 pr-8">
                  <div className="flex items-start space-x-4">
                    <MapPinHouse className="w-10 h-10 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Adresa
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Str. Calea Lugojului Nr 134/3
                        <br />
                        Ghiroda, Timiș
                        <br />
                        România
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-6 pr-8">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-10 h-10 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:office@coroxengineering.ro"
                        className="text-gray-600 hover:text-gray-900 transition-all duration-200"
                      >
                        office@coroxengineering.ro
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-6 pr-8">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-10 h-10 text-primary" />  
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Telefon
                      </h3>
                      <a
                        href="tel:+40256201077"
                        className="text-gray-600 hover:text-gray-900 transition-all duration-200"
                      >
                        +40 256 201 077
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-6 pr-8">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-10 h-10 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Program de Lucru
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Luni - Vineri: 8:00 - 17:00
                        <br />
                        Sâmbătă: 9:00 - 13:00
                        <br />
                        Duminică: Închis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="mb-8">
                <div className="inline-block">
                  <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                    Locație
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6 text-left">
                  Locația Noastră
                </h2>
              </div>
              <Map address="Str. Calea Lugojului Nr 134/3, Ghiroda, Timiș, România" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Contact Rapid
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contactați-ne Rapid
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pentru întrebări urgente sau cereri de ofertă, folosiți butoanele de contact rapid de mai jos.
            </p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <a
              href="mailto:office@coroxengineering.ro"
              className="bg-primary text-white px-8 py-4 font-semibold hover:bg-slate-600 transition-all duration-300 inline-flex items-center space-x-3  shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Trimite Email</span>
            </a>
            <a
              href="tel:+40256201077"
              className="border-2 border-slate-700 text-slate-700 px-8 py-4 font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Sună-ne</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-20 bg-white">
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
              Completați formularul de mai jos pentru a primi o ofertă personalizată
              pentru proiectul dumneavoastră. Echipa noastră vă va contacta în maxim 24 de ore.
            </p>
          </div>
          <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-8 pr-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
} 