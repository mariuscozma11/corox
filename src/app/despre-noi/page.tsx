import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Despre Noi - Corox Engineering | Povestea și Domeniile de Activitate',
  description: 'Află povestea Corox Engineering, domeniile noastre de activitate și experiența în automatizări industriale, certificări CE și soluții tehnice integrate.',
  keywords: 'despre Corox Engineering, povestea companiei, domenii de activitate, automatizare industrială, certificări CE, România',
}

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-800 text-white relative">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
            Despre Corox Engineering
          </h1>
          <p className="text-xl max-w-2xl text-left leading-relaxed text-slate-300">
            Suntem dedicați oferirii de soluții tehnice de înaltă calitate pentru industria românească, 
            cu accent pe inovație, siguranță și conformitate cu standardele europene.
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
                  <span className="text-xs font-medium tracking-wide uppercase text-slate-600 bg-slate-200 px-3 py-1">
                    Povestea Companiei
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6 text-left">
                  Povestea Noastră
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Corox Engineering a fost fondată cu viziunea de a aduce soluții tehnice avansate 
                  în industria românească, combinând experiența locală cu standardele internaționale 
                  de calitate și siguranță.
                </p>
                <p>
                  De-a lungul anilor, am dezvoltat o echipă de ingineri specializați în diverse 
                  domenii tehnice, de la automatizări industriale până la certificări CE și 
                  evaluări de risc.
                </p>
                <p>
                  Misiunea noastră este să oferim clienților soluții personalizate, eficiente 
                  și conforme cu toate reglementările europene, contribuind astfel la dezvoltarea 
                  durabilă a industriei românești.
                </p>
              </div>
            </div>
            
            <div className="border-l-4 border-slate-300 bg-gray-50 pl-8 py-8 pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-left">Valorile Noastre</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Calitate</h4>
                    <p className="text-gray-600 leading-relaxed">Ne angajăm să oferim servicii de cea mai înaltă calitate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Siguranță</h4>
                    <p className="text-gray-600 leading-relaxed">Siguranța este prioritatea noastră în toate proiectele</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Inovație</h4>
                    <p className="text-gray-600 leading-relaxed">Adoptăm cele mai noi tehnologii și soluții</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 border-2 border-white"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Conformitate</h4>
                    <p className="text-gray-600 leading-relaxed">Respectăm toate standardele și reglementările europene</p>
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
              <span className="text-xs font-medium tracking-wide uppercase text-slate-600 bg-slate-200 px-3 py-1">
                Domenii de Activitate
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Domeniile Noastre de Activitate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Oferim o gamă largă de servicii tehnice specializate pentru diverse sectoare industriale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-l-4 border-slate-300 bg-white pl-8 py-8 pr-8">
              <div className="mb-6">
                <div className="w-10 h-10 bg-slate-700 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Certificări CE</h3>
                <p className="text-gray-600 text-left leading-relaxed mb-4">
                  Servicii complete de certificare și evaluare conform standardelor europene, 
                  incluzând evaluări de risc și măsurători de siguranță.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Evaluări de risc</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Măsurători de siguranță</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Documentație tehnică</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Conformitate cu directivele UE</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-slate-300 bg-white pl-8 py-8 pr-8">
              <div className="mb-6">
                <div className="w-10 h-10 bg-slate-700 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Automatizări Industriale</h3>
                <p className="text-gray-600 text-left leading-relaxed mb-4">
                  Sisteme de automatizare și integrare de celule robotizate pentru 
                  optimizarea proceselor de producție.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Sisteme de control industrial</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Integrare de celule robotizate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">SCADA și HMI</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Optimizare procese</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-slate-300 bg-white pl-8 py-8 pr-8">
              <div className="mb-6">
                <div className="w-10 h-10 bg-slate-700 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Sisteme Metalice</h3>
                <p className="text-gray-600 text-left leading-relaxed mb-4">
                  Proiectare și construcție de structuri metalice și sisteme mecanice 
                  pentru diverse aplicații industriale.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Structuri metalice</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Sisteme mecanice</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Construcții industriale</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Montaje specializate</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-slate-300 bg-white pl-8 py-8 pr-8">
              <div className="mb-6">
                <div className="w-10 h-10 bg-slate-700 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Instalații Electrice</h3>
                <p className="text-gray-600 text-left leading-relaxed mb-4">
                  Automatizări și instalații electrice pentru sisteme industriale, 
                  cu accent pe eficiență și siguranță.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Instalații electrice industriale</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Automatizări electrice</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Sisteme de control</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Mentenanță preventivă</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-slate-300 bg-white pl-8 py-8 pr-8">
              <div className="mb-6">
                <div className="w-10 h-10 bg-slate-700 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Produse Standardizate</h3>
                <p className="text-gray-600 text-left leading-relaxed mb-4">
                  Oferim o gamă de produse standardizate pentru diverse aplicații industriale, 
                  disponibile la cerere de ofertă.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Produse standardizate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Soluții personalizate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Suport tehnic</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Servicii post-vânzare</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-slate-300 bg-white pl-8 py-8 pr-8">
              <div className="mb-6">
                <div className="w-10 h-10 bg-slate-700 flex items-center justify-center mb-4">
                  <div className="w-4 h-4 border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">Consultanță Tehnică</h3>
                <p className="text-gray-600 text-left leading-relaxed mb-4">
                  Servicii de consultanță tehnică specializată pentru optimizarea 
                  proceselor și implementarea de soluții inovatoare.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Analiză tehnică</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Optimizare procese</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Implementare soluții</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">Formare personal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
