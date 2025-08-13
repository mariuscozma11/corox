import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Servicii - Corox Engineering | Machine Safety, Automatizări Industriale și Soluții Tehnice',
  description: 'Servicii complete de Machine Safety, automatizări industriale, sisteme metalice, instalații electrice și produse standardizate. Soluții personalizate pentru industria românească.',
  keywords: 'Machine Safety, automatizări industriale, sisteme metalice, instalații electrice, produse standardizate, evaluări de risc, România',
}

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
            Serviciile Noastre
          </h1>
          <p className="text-xl max-w-2xl text-left leading-relaxed text-white/80">
            Oferim o gamă completă de servicii tehnice specializate pentru industria românească, 
            cu accent pe calitate, siguranță și conformitate cu standardele europene.
          </p>
          </div>
        </div>
      </section>

      {/* Priority Service - CE Certifications */}
      <section id="certificari" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Serviciu Prioritar
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Machine Safety și Evaluări de Risc
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Servicii complete de certificare și evaluare conform standardelor europene, 
              incluzând evaluări de risc și măsurători de siguranță pentru echipamente industriale.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Risk Evaluation */}
            <div className="group">
              <div className="border-l-4 border-slate-400 bg-white pl-6 py-8 pr-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-50">
                <div className="mb-6">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center mb-4">
                    <div className="w-3 h-3 border-2 border-slate-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
                    Evaluări de Risc
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-left leading-relaxed">
                  Analiză completă a riscurilor pentru echipamente și sisteme industriale, 
                  conform standardelor europene și reglementărilor de siguranță.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Identificarea și evaluarea riscurilor</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Metode de evaluare a probabilității</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Măsuri de reducere a riscurilor</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Documentație tehnică</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Measures */}
            <div className="group">
              <div className="border-l-4 border-slate-400 bg-white pl-6 py-8 pr-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-50">
                <div className="mb-6">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center mb-4">
                    <div className="w-3 h-3 border-2 border-slate-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
                    Măsurători de Siguranță
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-left leading-relaxed">
                  Măsurători și teste de siguranță precise pentru echipamente și 
                  sisteme industriale, asigurând conformitatea CE și siguranța operațională.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Protocoale de testare siguranță</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Măsurători tehnice</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Verificarea conformității</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Rapoarte tehnice</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Documentation */}
            <div className="group">
              <div className="border-l-4 border-slate-400 bg-white pl-6 py-8 pr-6 transition-all duration-300 hover:border-slate-600 hover:bg-slate-50">
                <div className="mb-6">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center mb-4">
                    <div className="w-3 h-3 border-2 border-slate-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
                    Documentație Tehnică
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-left leading-relaxed">
                  Elaborarea documentației tehnice complete necesare pentru 
                  certificarea CE și conformitatea cu directivele europene.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Manuale de utilizare și ghiduri</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Declarații de conformitate</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Dosare tehnice</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">Cerințe pentru marcajul CE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left">
              Servicii Tehnice Specializate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Oferim soluții complete pentru diverse nevoi industriale, 
              de la automatizări până la sisteme metalice și electrice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Industrial Automation */}
            <div id="automatizari" className="border-l-4 border-slate-300 bg-gray-50 pl-8 py-8 pr-8">
              <div className="mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center mb-4">
                  <div className="w-3 h-3 border-2 border-slate-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-left">Automatizări Industriale</h3>
                <p className="text-gray-600 text-left leading-relaxed">
                  Sisteme de automatizare și integrare de celule robotizate pentru 
                  optimizarea proceselor de producție și creșterea eficienței.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-left">Sisteme de Control</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">PLC și SCADA</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">HMI și interfețe</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Sisteme de monitorizare</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-left">Celule Robotizate</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Integrare roboți</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Sisteme de siguranță</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Programare și optimizare</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metal Systems */}
            <div id="sisteme" className="border-l-4 border-slate-300 bg-gray-50 pl-8 py-8 pr-8">
              <div className="mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center mb-4">
                  <div className="w-3 h-3 border-2 border-slate-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-left">Sisteme și Structuri Metalice</h3>
                <p className="text-gray-600 text-left leading-relaxed">
                  Proiectare și construcție de structuri metalice și sisteme mecanice 
                  pentru diverse aplicații industriale și comerciale.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-left">Structuri Metalice</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Construcții industriale</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Sisteme de susținere</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Structuri modulare</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-left">Sisteme Mecanice</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Transmisii mecanice</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Sisteme de acționare</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Montaje specializate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Electrical Installations */}
            <div id="electrice" className="border-l-4 border-slate-300 bg-gray-50 pl-8 py-8 pr-8">
              <div className="mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center mb-4">
                  <div className="w-3 h-3 border-2 border-slate-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-left">Automatizări și Instalații Electrice</h3>
                <p className="text-gray-600 text-left leading-relaxed">
                  Automatizări și instalații electrice pentru sisteme industriale, 
                  cu accent pe eficiență, siguranță și conformitate cu standardele.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-left">Instalații Industriale</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Tablouri electrice</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Sisteme de distribuție</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Protecții electrice</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-left">Automatizări Electrice</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Sisteme de control</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Automatizări procese</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Monitorizare și control</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standardized Products */}
            <div className="border-l-4 border-slate-300 bg-gray-50 pl-8 py-8 pr-8 lg:col-span-2">
              <div className="mb-8">
                <div className="w-8 h-8 bg-primary flex items-center justify-center mb-4">
                  <div className="w-3 h-3 border-2 border-slate-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-left">Produse Standardizate</h3>
                <p className="text-gray-600 text-left leading-relaxed max-w-3xl">
                  Oferim o gamă de produse standardizate pentru diverse aplicații industriale, 
                  disponibile la cerere de ofertă cu suport tehnic complet.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-left">Produse Industriale</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Echipamente standardizate</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Componente specializate</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Sisteme modulare</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-2 border-slate-200 pl-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-left">Suport și Servicii</h4>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Suport tehnic</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Servicii post-vânzare</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">Formare utilizatori</span>
                    </div>
                  </div>
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
