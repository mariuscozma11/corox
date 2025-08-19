import { HardHat, Lightbulb, Ruler, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import ServicesSummary from '@/components/ServicesSummary'

export const metadata: Metadata = {
  title: "Despre Corox Engineering - Automatizări Industriale și Machine Safety | Timișoara, România",
  description:
    "Află povestea Corox Engineering din Timișoara, Timiș, domeniile noastre de activitate și experiența în automatizări industriale, Machine Safety și soluții tehnice integrate pentru industria românească.",
  keywords:
    "despre Corox Engineering, povestea companiei, automatizare industrială, Machine Safety, Timișoara, Timiș, România, inginerie industrială, soluții tehnice",
  openGraph: {
    title: "Despre Corox Engineering - Automatizări Industriale și Machine Safety | Timișoara, România",
    description: "Află povestea Corox Engineering din Timișoara, Timiș, domeniile noastre de activitate și experiența în automatizări industriale, Machine Safety și soluții tehnice integrate.",
    type: 'website',
    locale: 'ro_RO',
    url: 'https://coroxengineering.ro/despre-noi',
  },
  alternates: {
    canonical: 'https://coroxengineering.ro/despre-noi',
  },
};

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              Despre Corox Engineering 
            </h1>
            <p className="text-xl max-w-2xl text-left leading-relaxed text-white/80">
              Corox Engineering, este dedicată oferirii de soluții tehnice de înaltă calitate
              pentru industria românească, cu accent pe inovație, siguranță și
              conformitate cu standardele europene.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <div className="inline-block">
                  <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                    Povestea Companiei
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6 text-left">
                  Povestea Noastră
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Corox Engineering a fost fondată cu viziunea de a aduce
                  soluții tehnice avansate în industria românească, combinând
                  experiența locală cu standardele internaționale de calitate și
                  siguranță.
                </p>
                <p>
                  De-a lungul anilor, am dezvoltat o echipă de ingineri și colaboratori
                  specializați în diverse domenii tehnice, de la automatizări
                  industriale până la Machine Safety și evaluări de risc.
                </p>
                <p>
                  Misiunea noastră este să oferim clienților soluții
                  personalizate, eficiente și conforme cu toate reglementările
                  europene, contribuind astfel la dezvoltarea durabilă a
                  industriei românești.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-8 pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-left">
                Valorile Noastre
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Calitate
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Ne angajăm să oferim servicii de cea mai înaltă calitate
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <HardHat className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Siguranță
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Siguranța este prioritatea noastră în toate proiectele
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Inovație
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Adoptăm cele mai noi tehnologii și soluții
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Ruler className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Conformitate
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Respectăm toate standardele și reglementările europene
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domains of Activity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Domenii de Activitate
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Domeniile Noastre de Activitate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Oferim o gamă largă de servicii tehnice specializate pentru
              diverse sectoare industriale
            </p>
          </div>

          <ServicesSummary />
        </div>
      </section>
    </div>
  );
}
