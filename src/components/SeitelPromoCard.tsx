import Image from 'next/image'
import SeitelShopCard from '@/components/SeitelShopCard'

export default function SeitelPromoCard() {
  return (
    <div className="relative bg-white border-l-4 border-slate-400 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left: Logo, Title, Copy, Features */}
          <div className="lg:col-span-8 lg:pr-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
              <Image
                src="/logo-seitel.webp"
                alt="Seitel Logo"
                width={96}
                height={96}
                className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 mx-auto lg:mx-0 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:hidden font-bold text-gray-900 mb-3 lg:mb-4">Seitel.ro</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                  Magazinul nostru online oferă o gamă largă de produse de securitate, smart home,
                  monitorizare și climatizare. Beneficiați de prețuri competitive, livrare rapidă și suport tehnic specializat.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-5">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-2 h-2 bg-primary flex-shrink-0"></div>
                <span className="text-sm lg:text-base text-gray-700">Produse de securitate și smart home</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-2 h-2 bg-primary flex-shrink-0"></div>
                <span className="text-sm lg:text-base text-gray-700">Sisteme de monitorizare și climatizare</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-2 h-2 bg-primary flex-shrink-0"></div>
                <span className="text-sm lg:text-base text-gray-700">Suport tehnic specializat și livrare rapidă</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-2 h-2 bg-primary flex-shrink-0"></div>
                <span className="text-sm lg:text-base text-gray-700">Prețuri competitive și consultanță</span>
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:col-span-4 min-w-0">
            <div className="lg:border-l lg:border-slate-200 lg:pl-8">
              <SeitelShopCard
                title="Accesați Magazinul"
                description="Vizitați Seitel.ro pentru a descoperi toate produsele disponibile"
                href="https://seitel.ro"
                ctaLabel="Vizitează Seitel.ro"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

