export default function PoliticaConfidentialitate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
              Politica de Confidențialitate
            </h1>
            <p className="text-white/80 max-w-3xl text-left leading-relaxed">
              Cum colectăm, utilizăm și protejăm datele dvs. personale în cadrul Corox Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8">
            <div className="space-y-10">
              {/* 1. Info generale */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informații Generale</h2>
                <p className="text-gray-600 leading-relaxed">
                  Această Politică de Confidențialitate explică modul în care Corox Engineering colectează, utilizează
                  și protejează datele cu caracter personal ale vizitatorilor și clienților, în conformitate cu legislația
                  aplicabilă, inclusiv Regulamentul (UE) 2016/679 (GDPR).
                </p>
              </section>

              {/* 2. Date colectate */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ce Date Colectăm</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-1">
                  <li>Date de contact: nume, adresă de email, număr de telefon, companie</li>
                  <li>Date tehnice: adresă IP, tip dispozitiv, browser, pagini vizitate</li>
                  <li>Conținutul transmis prin formularele de contact sau aplicație</li>
                  <li>Preferințe de consimțământ privind cookie-urile (prin Cookiebot)</li>
                </ul>
              </section>

              {/* 3. Scopuri */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Scopul Prelucrării</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-1">
                  <li>Răspuns la solicitări și transmiterea ofertelor</li>
                  <li>Furnizarea serviciilor și derularea contractelor</li>
                  <li>Îmbunătățirea experienței pe site și analiza traficului</li>
                  <li>Respectarea obligațiilor legale</li>
                </ul>
              </section>

              {/* 4. Temei legal */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Temeiul Legal al Prelucrării</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-1">
                  <li>Consimțământul (art. 6 alin. 1 lit. a GDPR)</li>
                  <li>Executarea unui contract / demersuri precontractuale (art. 6 alin. 1 lit. b)</li>
                  <li>Interes legitim (art. 6 alin. 1 lit. f)</li>
                  <li>Obligații legale (art. 6 alin. 1 lit. c)</li>
                </ul>
              </section>

              {/* 5. Durata */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Durata de Stocare</h2>
                <p className="text-gray-600 leading-relaxed">
                  Păstrăm datele doar pe perioada necesară scopurilor pentru care au fost colectate sau conform
                  obligațiilor legale. Ulterior, acestea vor fi șterse sau anonimizate.
                </p>
              </section>

              {/* 6. Partajare */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Partajarea Datelor</h2>
                <p className="text-gray-600 leading-relaxed">
                  Putem partaja datele cu furnizori de servicii (de ex. găzduire, instrumente analitice, soluții de
                  formulare) strict în scopurile menționate, cu garanții adecvate privind protecția datelor.
                  Nu vindem datele dvs. către terți.
                </p>
              </section>

              {/* 7. Drepturi */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Drepturile Dumneavoastră</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-1">
                  <li>Dreptul de acces, rectificare, ștergere</li>
                  <li>Dreptul de a vă opune și de a solicita restricționarea prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul de a vă retrage consimțământul</li>
                  <li>Dreptul de a depune o plângere la ANSPDCP</li>
                </ul>
              </section>

              {/* 8. Securitate */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Securitatea Datelor</h2>
                <p className="text-gray-600 leading-relaxed">
                  Implementăm măsuri tehnice și organizaționale rezonabile pentru a proteja datele împotriva accesului
                  neautorizat, pierderii sau divulgării.
                </p>
              </section>

              {/* 9. Contact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                <p className="text-gray-600 mb-4">
                  Pentru întrebări privind protecția datelor, ne puteți contacta:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Corox Engineering</p>
                  <p className="text-gray-600">Str. Calea Lugojului Nr 134/3, Ghiroda, Timiș, România</p>
                  <p className="text-gray-600">Email: office@coroxengineering.ro</p>
                  <p className="text-gray-600">Telefon: +40 256 201 077</p>
                </div>
              </section>

              {/* 10. Modificări */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificări ale Politicii</h2>
                <p className="text-gray-600 leading-relaxed">
                  Putem actualiza periodic această Politică de Confidențialitate. Orice modificare va fi publicată pe
                  această pagină, cu actualizarea datei de mai jos.
                </p>
              </section>

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