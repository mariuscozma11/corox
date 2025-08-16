import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termene și Condiții - Corox Engineering Timișoara | Condiții de Utilizare',
  description: 'Termenele și condițiile de utilizare a site-ului Corox Engineering din Timișoara, Timiș. Informații despre serviciile noastre, responsabilități și drepturi.',
  keywords: 'termene condiții Corox Engineering, condiții utilizare, servicii industriale, automatizări, Machine Safety, Timișoara, Timiș, România',
  openGraph: {
    title: 'Termene și Condiții - Corox Engineering Timișoara | Condiții de Utilizare',
    description: 'Termenele și condițiile de utilizare a site-ului Corox Engineering din Timișoara, Timiș.',
    type: 'website',
    locale: 'ro_RO',
    url: 'https://coroxengineering.ro/termene-si-conditii',
  },
  alternates: {
    canonical: 'https://coroxengineering.ro/termene-si-conditii',
  },
}

export default function TermeneSiConditii() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Termene și Condiții - Corox Engineering Timișoara
          </h1>
          <p className="text-xl text-white/80">
            Condițiile de utilizare a site-ului și serviciilor Corox Engineering din Timișoara, Timiș
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* General Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Termeni Generali
                </h2>
                <p className="text-gray-600 mb-4">
                  Prin accesarea și utilizarea site-ului web Corox Engineering, acceptați să respectați și să vă supuneți următoarelor termene și condiții de utilizare. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați site-ul nostru.
                </p>
                <p className="text-gray-600">
                  Corox Engineering se rezervă dreptul de a modifica acești termeni în orice moment, modificările fiind valabile de la data publicării pe site.
                </p>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Descrierea Serviciilor
                </h2>
                <p className="text-gray-600 mb-4">
                  Corox Engineering oferă servicii de:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Instalații electrice industriale și tablouri electrice</li>
                  <li>Machine Safety și evaluări de risc</li>
                  <li>Soluții de automatizare și programare PLC & SCADA</li>
                  <li>Proiectare și execuție electrică și mecanică</li>
                  <li>Distribuție produse și echipamente industriale</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Responsabilitățile Utilizatorului
                </h2>
                <p className="text-gray-600 mb-4">
                  Utilizatorul se obligă să:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Furnizeze informații corecte și complete în formularele de contact</li>
                  <li>Nu utilizeze site-ul în scopuri ilegale sau care să afecteze funcționarea acestuia</li>
                  <li>Nu încerce să acceseze zone restricționate ale site-ului</li>
                  <li>Respecte drepturile de proprietate intelectuală</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Proprietatea Intelectuală
                </h2>
                <p className="text-gray-600 mb-4">
                  Toate conținuturile site-ului, inclusiv textele, imaginile, logotipurile, designul și software-ul, sunt protejate de legile privind drepturile de autor și reprezintă proprietatea Corox Engineering sau a partenerilor săi.
                </p>
                <p className="text-gray-600">
                  Reproducerea, distribuirea sau modificarea acestor conținuturi fără acordul scris al Corox Engineering este strict interzisă.
                </p>
              </div>

              {/* Privacy and Data Protection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Confidențialitate și Protecția Datelor
                </h2>
                <p className="text-gray-600 mb-4">
                  Protejarea datelor personale este o prioritate pentru Corox Engineering. Colectarea, procesarea și stocarea datelor se face în conformitate cu:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Regulamentul General privind Protecția Datelor (GDPR)</li>
                  <li>Legea nr. 190/2018 privind măsurile de punere în aplicare a GDPR</li>
                  <li>Politica noastră de confidențialitate</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Limitarea Răspunderii
                </h2>
                <p className="text-gray-600 mb-4">
                  Corox Engineering nu poate fi trasă la răspundere pentru:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Daunele indirecte rezultate din utilizarea site-ului</li>
                  <li>Interruperile de serviciu cauzate de factori externi</li>
                  <li>Pierderile de date cauzate de utilizarea necorespunzătoare a site-ului</li>
                  <li>Conținuturile furnizate de utilizatori sau terți</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Informații de Contact
                </h2>
                <p className="text-gray-600 mb-4">
                  Pentru orice întrebări legate de acești termeni și condiții, ne puteți contacta la:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Corox Engineering</p>
                  <p className="text-gray-600">Str. Calea Lugojului Nr 134/3, Ghiroda, Timiș, România</p>
                  <p className="text-gray-600">Email: office@coroxengineering.ro</p>
                  <p className="text-gray-600">Telefon: +40 256 201 077</p>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Legea Aplicabilă
                </h2>
                <p className="text-gray-600">
                  Acești termeni și condiții sunt guvernați de legislația română. Orice dispută va fi rezolvată de instanțele competente din România.
                </p>
              </div>

              {/* Last Updated */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-500 text-center">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 