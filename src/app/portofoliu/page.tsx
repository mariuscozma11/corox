import type { Metadata } from "next";
import { Factory, Construction, Settings, Award, Car } from "lucide-react";
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
    title:
      "Portofoliu Proiecte Automatizări Industriale și Machine Safety | Corox Engineering Timișoara",
    description:
      "Explorează portofoliul nostru de proiecte în automatizări industriale, Machine Safety și soluții tehnice integrate realizate în Timișoara, Timiș și toată România.",
    type: "website",
    locale: "ro_RO",
    url: "https://coroxengineering.ro/portofoliu",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "Portofoliu Proiecte Automatizări Industriale și Machine Safety - Corox Engineering",
      },
    ],
  },
  alternates: {
    canonical: "https://coroxengineering.ro/portofoliu",
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
              Portofoliu Proiecte
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
              // {
              //   title: "Sistem de Automatizare Industrială",
              //   description:
              //     "Implementare sistem SCADA complet pentru o fabrică de producție, incluzând monitorizare în timp real și control automat al proceselor.",
              //   tags: ["SCADA", "PLC", "HMI"],
              //   client: "Industrie de Producție",
              //   year: "2023",
              //   iconType: "automation",
              //   images: [
              //     { src: "/next.svg", alt: "Ecran SCADA" },
              //     { src: "/vercel.svg", alt: "Arhitectură sistem" },
              //     { src: "/logo-color.svg", alt: "Siglă proiect" },
              //   ],
              // },
              {
                title: "Dispozitiv de Clipsare Senzori",
                description:
                  "Dispozitivul este echipat cu un piston pneumatic , un rulment liniar si doua axe de precizie pentru actionarea pe verticala si o surubelnita pneumatica pentru rotirea senzorului in pozitia finala. Cu o forta definita de pistonul pneumatic, partea superioara a dispozitivului coboara pentru a presa capacul senzorului iar surubelnita pneumatica insurubeaza pentru a se realiza o clipsare corecta.",
                tags: ["Automatizare", "Safety", "Electric"],
                year: "2023",
                iconType: "automation",
                images: [
                  {
                    src: "/choco1.jpeg",
                    alt: "Dispozitiv de Clipsare Senzori",
                  },
                  {
                    src: "/choco2.jpeg",
                    alt: "Dispozitiv de Clipsare Senzori",
                  },
                ],
              },
              {
                title: "Celula Robotizata pentru Injectie",
                description:
                  "Scopul principal al acestei celule robotizate este de a efectua procesul de injectare a materialului (ceramică) în senzori în mod automat, fără intervenția constantă a unui operator. Cu toate acestea, un operator trebuie să monitorizeze procesul de injectare pentru a putea interveni sau să anunțe personalul calificat în cazul apariției oricăror probleme. După finalizarea procesului de alimentare cu material, robotul se va poziționa într-o zonă destinată schimbului de grippere cu unul încărcat. Operatorul va deschide o fereastră pentru a accesa această zonă. Dispozitivele de injecție cu material sunt fixate în partea laterală a celulei.",
                tags: ["Robot", "Safety", "Automatizare"],
                year: "2023",
                iconType: "automation",
                images: [
                  {
                    src: "/celula1.jpeg",
                    alt: "Celula Robotizata pentru Injectie",
                  },
                  {
                    src: "/celula2.jpeg",
                    alt: "Celula Robotizata pentru Injectie",
                  },
                  {
                    src: "/celula3.jpeg",
                    alt: "Celula Robotizata pentru Injectie",
                  },
                ],
              },
              {
                title: "Dispozitiv de Schimbare Tambur",
                description: `Dispozitivul va fi utilizat în cadrul procesului de schimbare a burdufelor din presă. Acesta va fi capabil să transporte burdufele de la atelierul destinat burdufelor până la presă, iar plasarea burdufelor va fi cât mai aproape de zona interioară a presei.
`,
                tags: ["Dispozitiv", "Proiectare", "Mecanic"],
                year: "2024",
                iconType: "automation",
                images: [
                  {
                    src: "/tambur1.jpeg",
                    alt: "Dispozitiv de Schimbare Tambur",
                  },
                  {
                    src: "/tambur2.jpeg",
                    alt: "Dispozitiv de Schimbare Tambur",
                  },
                  {
                    src: "/tambur3.jpeg",
                    alt: "Dispozitiv de Schimbare Tambur",
                  },
                ],
              },
              {
                title: "Conveior cu Role",
                description: [
                  "Functionalitatea este unidirecțională, transportul efectuându-se doar într-o singură direcție.",
                  "Pentru realizarea acestui scop, utilajul este compus dintr-un tronson de 18m și unul de 2.5m drept, două curbe și o porțiune dreaptă de așteptare a cauciucurilor, asigurând astfel descărcarea de pe cele 5 stații de lucru.",
                  "Pentru asigurarea funcționalității, sistemul este prevăzut cu o serie de senzori fotoelectrici amplasați pe profilele laterale ale conveiorului. Conexiunile electrice sunt realizate în unitățile de comandă (zone controller) montate pe lateralul conveiorului. Profilele laterale ale conveioarelor sunt prevăzute cu parapeti cu role metalice pentru împiedicarea căderii materialului transportat.",
                ].join(' '),
                tags: ["Conveior", "Proiectare", "Mecanic"],
                year: "2022",
                iconType: "automation",
                images: [
                  {
                    src: "/conveior1.jpeg",
                    alt: "Conveior cu role",
                  },
                  {
                    src: "/conveior2.jpeg",
                    alt: "Conveior cu role",
                  },
                  {
                    src: "/conveior3.jpeg",
                    alt: "Conveior cu role",
                  },
                ],
              }
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
                <Car className="w-8 h-8 text-primary" />
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
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Producție</h4>
                <p className="text-sm text-gray-600">
                  Optimizarea proceselor industriale
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Construction className="w-8 h-8 text-primary" />
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
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Procesare</h4>
                <p className="text-sm text-gray-600">
                  Sisteme de control și monitorizare
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="w-8 h-8 text-primary" />
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

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Industrie Instalații Electrice
                </h4>
                <p className="text-sm text-gray-600">
                  Industrie de instalații electrice.
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
              Contactați-ne pentru o ofertă personalizată pentru proiectul
              dumneavoastră. Echipa noastră vă va contacta în maxim 24 de ore.
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
