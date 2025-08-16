import type { Metadata } from "next";
import {
  Factory,
  Construction,
  Settings,
  Award,
  Car,
} from "lucide-react";
import ProjectCarousel from "@/components/ProjectCarousel";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title:
    "Portofoliu Proiecte Automatizări Industriale și Machine Safety | Corox Engineering Timișoara",
  description:
    "Explorează portofoliul nostru de proiecte în automatizări industriale, Machine Safety și soluții tehnice integrate realizate în Timișoara, Timiș și toată România. Referințe și colaborări cu companii din industria românească.",
  keywords:
    "portofoliu proiecte, referințe, automatizări industriale, Machine Safety, colaborări, Timișoara, Timiș, România, proiecte industriale, soluții tehnice",
  openGraph: {
    title: "Portofoliu Proiecte Automatizări Industriale și Machine Safety | Corox Engineering Timișoara",
    description: "Explorează portofoliul nostru de proiecte în automatizări industriale, Machine Safety și soluții tehnice integrate realizate în Timișoara, Timiș și toată România.",
    type: 'website',
    locale: 'ro_RO',
    url: 'https://coroxengineering.ro/portofoliu',
  },
  alternates: {
    canonical: 'https://coroxengineering.ro/portofoliu',
  },
};

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              Portofoliu Proiecte - Timișoara, Timiș și România
            </h1>
            <p className="text-xl max-w-2xl text-left leading-relaxed text-white/80">
              Descoperă proiectele noastre de succes în automatizări
              industriale, Machine Safety și soluții tehnice integrate realizate
              în Timișoara, Timiș și pentru industria românească.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Proiecte Realizate
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Proiecte de Referință
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Proiecte realizate cu succes pentru clienți din diverse sectoare
              industriale, demonstrând expertiza noastră în soluții tehnice
              integrate.
            </p>
          </div>

          <ProjectCarousel
            projects={[
              {
                title: "Sistem de Automatizare Industrială",
                description:
                  "Implementare sistem SCADA complet pentru o fabrică de producție, incluzând monitorizare în timp real și control automat al proceselor.",
                tags: ["SCADA", "PLC", "HMI"],
                client: "Industrie de Producție",
                year: "2023",
                iconType: "automation",
              },
              {
                title: "Machine Safety pentru Echipamente",
                description:
                  "Certificare completă CE pentru o linie de echipamente industriale, incluzând evaluări de risc și documentație tehnică.",
                tags: ["Certificare CE", "Evaluare Risc", "Documentație"],
                client: "Producător Echipamente",
                year: "2023",
                iconType: "certification",
              },
              {
                title: "Structuri Metalice Industriale",
                description:
                  "Proiectare și construcție de structuri metalice pentru o hala industrială, cu sisteme de susținere și montaje specializate.",
                tags: ["Structuri Metalice", "Construcții", "Montaje"],
                client: "Industrie Construcții",
                year: "2022",
                iconType: "metal",
              },
              {
                title: "Instalații Electrice Industriale",
                description:
                  "Instalații electrice complete pentru o fabrică de procesare, incluzând tablouri electrice și sisteme de protecție.",
                tags: ["Instalații Electrice", "Tablouri", "Protecții"],
                client: "Industrie Procesare",
                year: "2022",
                iconType: "electrical",
              },
              {
                title: "Celulă Robotizată de Producție",
                description:
                  "Integrare completă a unei celule robotizate pentru operații de asamblare, cu sisteme de siguranță și control automat.",
                tags: ["Roboți", "Asamblare", "Siguranță"],
                client: "Industrie Auto",
                year: "2021",
                iconType: "robotics",
              },
              {
                title: "Consultanță Tehnică și Optimizare",
                description:
                  "Servicii de consultanță tehnică pentru optimizarea proceselor de producție și implementarea de soluții inovatoare.",
                tags: ["Consultanță", "Optimizare", "Inovație"],
                client: "Industrie Diversificată",
                year: "2021",
                iconType: "consulting",
              },
              {
                title: "Modernizare Linie de Producție",
                description:
                  "Modernizarea completă a unei linii de producție cu sisteme de automatizare avansate și monitorizare digitală.",
                tags: ["Modernizare", "Digitalizare", "IoT"],
                client: "Industrie Alimentară",
                year: "2023",
                iconType: "automation",
              },
              {
                title: "Machine Safety pentru Mașini Speciale",
                description:
                  "Certificare CE pentru mașini speciale de prelucrare, incluzând măsurători de siguranță și optimizarea documentației.",
                tags: ["Mașini Speciale", "Măsurători", "Conformitate"],
                client: "Constructori Mașini",
                year: "2023",
                iconType: "certification",
              },
              {
                title: "Platformă Logistică Automatizată",
                description:
                  "Proiectare și implementare structuri metalice pentru centru logistic cu sisteme de transport automatizat.",
                tags: ["Logistică", "Transport", "Automatizare"],
                client: "Industrie Logistică",
                year: "2022",
                iconType: "metal",
              },
              {
                title: "Sistem de Distribuție Electrică",
                description:
                  "Implementare sistem complex de distribuție electrică pentru complex industrial cu multiple facilități de producție.",
                tags: ["Distribuție", "Rețele", "Smart Grid"],
                client: "Complex Industrial",
                year: "2022",
                iconType: "electrical",
              },
              {
                title: "Robot de Sudură Colaborativ",
                description:
                  "Integrarea unui robot colaborativ pentru operații de sudură de precizie în industria aeronautică.",
                tags: ["Cobot", "Sudură", "Precizie"],
                client: "Industrie Aeronautică",
                year: "2021",
                iconType: "robotics",
              },
              {
                title: "Audit și Eficiență Energetică",
                description:
                  "Audit energetic complet și implementare măsuri de eficiență pentru reducerea consumurilor industriale.",
                tags: ["Audit", "Eficiență", "Sustenabilitate"],
                client: "Industrie Chimică",
                year: "2021",
                iconType: "consulting",
              },
            ]}
          />
        </div>
      </section>





      {/* Industry Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Sectoare de Activitate
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Domenii de Expertiză
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Suntem mândri să colaborăm cu companii din următoarele sectoare
              industriale:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Car className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Industrie Auto
                </h4>
                <p className="text-sm text-gray-600">
                  Sisteme de automatizare și celule robotizate
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Factory className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Producție
                </h4>
                <p className="text-sm text-gray-600">
                  Optimizarea proceselor industriale
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Construction className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Construcții
                </h4>
                <p className="text-sm text-gray-600">
                  Structuri metalice și instalații
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Procesare
                </h4>
                <p className="text-sm text-gray-600">
                  Sisteme de control și monitorizare
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Echipamente
                </h4>
                <p className="text-sm text-gray-600">
                  Machine Safety și evaluări de risc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
