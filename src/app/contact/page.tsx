"use client";
import QuoteForm from "@/components/QuoteForm";
import Map from "@/components/Map";
import { Clock, Mail, MapPinHouse, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              Contactează-ne
            </h1>
            <p className="text-xl max-w-2xl text-left leading-relaxed text-white/80">
              Suntem aici să vă ajutăm cu soluțiile tehnice de care aveți
              nevoie. Contactați-ne pentru o consultație gratuită sau o ofertă
              personalizată.
            </p>
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
                        href="mailto:bogdan.junc@coroxengineering.ro"
                        className="text-gray-600 hover:text-gray-900 transition-all duration-200"
                      >
                        bogdan.junc@coroxengineering.ro
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
                        href="tel:+40727336169"
                        className="text-gray-600 hover:text-gray-900 transition-all duration-200"
                      >
                        +40 727 336 169
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

              {/* Quick Contact Buttons */}
              <div className="mt-12 space-x-4">
                <a
                  href="mailto:bogdan.junc@coroxengineering.ro"
                  className="bg-primary text-white px-8 py-4 font-semibold hover:bg-slate-600 transition-all duration-300 inline-flex items-center space-x-3 border-2 border-transparent"
                >
                  <Mail />
                  <span>Trimite Email</span>
                </a>
                <a
                  href="tel:+40727336169"
                  className="border-2 border-slate-700 text-slate-700 px-8 py-4 font-semibold hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
                >
                  <Phone />
                  <span>Sună-ne</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Locația Noastră
              </h2>
              <Map address="Str. Calea Lugojului Nr 134/3, Ghiroda, Timiș, România" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cerere de Ofertă
            </h2>
            <p className="text-lg text-gray-600">
              Completați formularul de mai jos pentru a primi o ofertă
              personalizată pentru serviciile de care aveți nevoie
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-lg text-gray-600">
              Răspunsuri la cele mai comune întrebări despre serviciile noastre
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cât durează procesul de certificare CE?
              </h3>
              <p className="text-gray-600">
                Durata procesului de certificare CE variază în funcție de
                complexitatea echipamentului și de documentația disponibilă. În
                general, procesul durează între 2-8 săptămâni.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ce servicii de automatizare oferiți?
              </h3>
              <p className="text-gray-600">
                Oferim servicii complete de automatizare industrială, incluzând
                sisteme SCADA, PLC, HMI, integrare de roboți și optimizarea
                proceselor de producție.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lucrați în toată România?
              </h3>
              <p className="text-gray-600">
                Da, oferim servicii în toată România. Echipa noastră se
                deplasează la locația clienților pentru implementarea soluțiilor
                tehnice.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Oferiți servicii de mentenanță?
              </h3>
              <p className="text-gray-600">
                Da, oferim servicii complete de mentenanță preventivă și
                corectivă pentru toate sistemele pe care le implementăm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
