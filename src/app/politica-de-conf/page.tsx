export default function PoliticaConfidentialitate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Politica de Confidențialitate - Corox Engineering
          </h1>
          <p className="text-xl text-white/80">
            Cum colectăm, utilizăm și protejăm datele dvs. personale
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* General Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Informații Generale
                </h2>
                <p className="text-gray-600 mb-4">
                  Această Politică de Confidențialitate explică modul în care Corox Engineering colectează, utilizează și protejează datele cu caracter personal ale vizitatorilor și clienților săi în conformitate cu legislația aplicabilă, inclusiv Regulamentul (UE) 2016/679 (GDPR).
                </p>
                <p className="text-gray-600">
                  Prin utilizarea acestui site, sunteți de acord cu termenii prezentei politici. Dacă nu sunteți de acord, vă rugăm să nu utilizați site-ul.
                </p>
              </div>

              {/* Data we collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Ce Date Colectăm
                </h2>
                <p className="text-gray-600 mb-4">Putem colecta următoarele categorii de date:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Date de contact: nume, adresă de email, număr de telefon, companie</li>
                  <li>Date tehnice: adresă IP, tipul dispozitivului, browser, pagini vizitate</li>
                  <li>Conținutul mesajelor transmise prin formularele de contact</li>
                  <li>Preferințe de consimțământ privind cookie-urile (prin Cookiebot)</li>
                </ul>
              </div>

              {/* Purpose of processing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Scopul Prelucrării
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Răspuns la solicitări și transmiterea ofertelor</li>
                  <li>Furnizarea serviciilor și derularea contractelor</li>
                  <li>Îmbunătățirea experienței pe site și analiza traficului</li>
                  <li>Respectarea obligațiilor legale</li>
                </ul>
              </div>

              {/* Legal basis */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Temeiul Legal al Prelucrării
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Consimțământul dvs. (art. 6 alin. 1 lit. a GDPR)</li>
                  <li>Executarea unui contract sau demersuri precontractuale (art. 6 alin. 1 lit. b)</li>
                  <li>Interesul legitim (art. 6 alin. 1 lit. f)</li>
                  <li>Obligații legale (art. 6 alin. 1 lit. c)</li>
                </ul>
              </div>

              {/* Data retention */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Durata de Stocare
                </h2>
                <p className="text-gray-600">
                  Păstrăm datele doar pe perioada necesară scopurilor pentru care au fost colectate sau conform obligațiilor legale. Ulterior, acestea vor fi șterse sau anonimizate.
                </p>
              </div>

              {/* Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Partajarea Datelor
                </h2>
                <p className="text-gray-600 mb-4">
                  Putem partaja datele cu furnizori de servicii (ex: găzduire, instrumente analitice, soluții de formulare) strict în scopurile menționate, cu garanții adecvate privind protecția datelor.
                </p>
                <p className="text-gray-600">
                  Nu vindem datele dvs. către terți.
                </p>
              </div>

              {/* Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Drepturile Dumneavoastră
                </h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Dreptul de acces, rectificare, ștergere</li>
                  <li>Dreptul de a vă opune prelucrării și de a solicita restricționarea</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul de a vă retrage consimțământul în orice moment</li>
                  <li>Dreptul de a depune o plângere la ANSPDCP</li>
                </ul>
              </div>

              {/* Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Securitatea Datelor
                </h2>
                <p className="text-gray-600">
                  Implementăm măsuri tehnice și organizaționale rezonabile pentru a proteja datele împotriva accesului neautorizat, pierderii sau divulgării.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Contact
                </h2>
                <p className="text-gray-600 mb-4">
                  Pentru întrebări privind protecția datelor, ne puteți contacta:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Corox Engineering</p>
                  <p className="text-gray-600">Str. Calea Lugojului Nr 134/3, Ghiroda, Timiș, România</p>
                  <p className="text-gray-600">Email: office@coroxengineering.ro</p>
                  <p className="text-gray-600">Telefon: +40 256 201 077</p>
                </div>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Modificări ale Politicii
                </h2>
                <p className="text-gray-600">
                  Putem actualiza periodic această Politică de Confidențialitate. Orice modificare va fi publicată pe această pagină, cu actualizarea datei de mai jos.
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