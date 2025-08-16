import type { Metadata } from 'next'
import { Briefcase, MapPin, Clock, Users, TrendingUp, Award } from 'lucide-react'
import CareerApplicationForm from '@/components/CareerApplicationForm'

export const metadata: Metadata = {
  title: 'Cariere Corox Engineering - Timișoara, Timiș | Oportunități în Automatizări Industriale',
  description: 'Alătură-te echipei Corox Engineering din Timișoara, Timiș. Oportunități de carieră în automatizări industriale, Machine Safety și soluții tehnice. Aplică pentru pozițiile disponibile.',
  keywords: 'cariere Corox Engineering, locuri de muncă inginerie, automatizări industriale, Machine Safety, oportunități carieră, Timișoara, Timiș, România, inginerie industrială',
  openGraph: {
    title: 'Cariere Corox Engineering - Timișoara, Timiș | Oportunități în Automatizări Industriale',
    description: 'Alătură-te echipei Corox Engineering din Timișoara, Timiș. Oportunități de carieră în automatizări industriale, Machine Safety și soluții tehnice.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://coroxengineering.ro/cariere',
  },
  alternates: {
    canonical: 'https://coroxengineering.ro/cariere',
  },
}

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: "Inginer Machine Safety",
      department: "Engineering",
      location: "Ghiroda, Timiș",
      type: "Full-time",
      experience: "2-4 ani",
      description: "Căutăm un inginer specializat în Machine Safety pentru evaluări de risc și implementarea standardelor de siguranță pentru echipamente industriale.",
      requirements: [
        "Diplomă în Inginerie Mecanică, Electrică sau domeniu similar",
        "Experiență în Machine Safety și evaluări de risc",
        "Cunoașterea standardelor europene de siguranță",
        "Abilități analitice și atenție la detalii"
      ]
    },
    {
      id: 2,
      title: "Inginer Automatizări Industriale",
      department: "Engineering", 
      location: "Ghiroda, Timiș",
      type: "Full-time",
      experience: "3-5 ani",
      description: "Poziție pentru dezvoltarea și implementarea sistemelor de automatizare industrială, PLC, SCADA și HMI.",
      requirements: [
        "Diplomă în Automatică, Electronică sau Inginerie Electrică",
        "Experiență cu sisteme PLC (Siemens, Allen-Bradley)",
        "Cunoștințe SCADA și HMI",
        "Experiență în programarea și configurarea sistemelor automate"
      ]
    },
    {
      id: 3,
      title: "Tehnician Sisteme Electrice",
      department: "Technical",
      location: "Ghiroda, Timiș", 
      type: "Full-time",
      experience: "1-3 ani",
      description: "Suport tehnic pentru instalații electrice industriale și mentenanța sistemelor electrice existente.",
      requirements: [
        "Studii tehnice în domeniul electric",
        "Experiență în instalații electrice industriale",
        "Cunoștințe de bază AutoCAD",
        "Permis de conducere categoria B"
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Dezvoltare Profesională",
      description: "Oportunități de formare continuă și avansare în carieră"
    },
    {
      icon: Users,
      title: "Echipă Dinamică",
      description: "Lucrează alături de profesioniști experimentați"
    },
    {
      icon: Award,
      title: "Proiecte Inovatoare",
      description: "Participă la proiecte tehnologice de vârf"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              Cariere la Corox Engineering - Timișoara, Timiș
            </h1>
            <p className="text-xl max-w-2xl text-left leading-relaxed text-white/80">
              Corox Engineering, cu sediul în Timișoara, Timiș, îți oferă oportunitatea de a te alătura echipei noastre de profesioniști și de a contribui la dezvoltarea 
              soluțiilor tehnice inovatoare pentru industria românească.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                De Ce Corox Engineering
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              De Ce Să Lucrezi Cu Noi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Oferim un mediu de lucru stimulant unde talentul și inovația sunt apreciate și recompensate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div key={index} className="border-l-4 border-slate-400 bg-gray-50 pl-8 py-8 pr-8">
                  <div className="mb-6">
                    <IconComponent className="w-10 h-10 text-primary mb-4 flex items-center justify-center" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">{benefit.title}</h3>
                    <p className="text-gray-600 text-left leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Poziții Disponibile
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Oportunități de Carieră
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Descoperă pozițiile deschise în echipa noastră și aplică pentru cea care îți potrivește cel mai bine.
            </p>
          </div>

          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <Briefcase className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.experience} experiență
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {job.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Cerințe:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:w-48">
                    <a
                      href="#apply"
                      className="w-full bg-primary text-white px-6 py-3 font-semibold hover:bg-slate-600 transition-all duration-300 inline-flex items-center justify-center"
                    >
                      Aplică Acum
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block">
              <span className="text-xs font-medium tracking-wide uppercase text-white bg-primary px-3 py-1">
                Aplicare
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6 text-left">
              Aplică pentru o Poziție
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl text-left leading-relaxed">
              Completează formularul de mai jos pentru a aplica la una dintre pozițiile disponibile.
              Echipa noastră de HR te va contacta în cel mai scurt timp.
            </p>
          </div>
          <div className="border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8">
            <CareerApplicationForm />
          </div>
        </div>
      </section>
    </div>
  )
}