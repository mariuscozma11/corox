import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t-4 border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Info - Takes up more space */}
          <div className="lg:col-span-7">
            {/* Company Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  className="border-secondary border-3 rounded-full"
                  src="/logo-color.svg"
                  alt="Corox Engineering"
                  width={64}
                  height={64}
                />

                <div>
                  <span className="text-2xl font-bold text-white tracking-tight">
                    Corox Engineering
                  </span>
                  <div className="text-sm text-slate-200 uppercase tracking-wide font-medium">
                    Industrial Solutions
                  </div>
                </div>
              </div>
              <p className="text-slate-400 max-w-2xl leading-relaxed">
                Soluții profesionale în domeniul automatizărilor industriale,
                Machine Safety, evaluări de risc și sisteme tehnice integrate
                pentru industria românească.
              </p>
            </div>

            {/* Contact Details */}
            <div className="border-l-2 border-slate-600 pl-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Informații de Contact
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-slate-200">
                      Corox Engineering SRL
                    </p>
                    <p className="text-sm text-slate-400">
                      Str. Calea Lugojului Nr 134/3
                      <br />
                      Ghiroda, Timiș, România
                    </p>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="mailto:bogdan.junc@coroxengineering.ro"
                      className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-200 group"
                    >
                      <Mail className="w-6" />
                      <span className="text-sm">
                        bogdan.junc@coroxengineering.ro
                      </span>
                    </a>
                    <a
                      href="tel:+40727336169"
                      className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-200 group"
                    >
                      <Phone className="w-6" />
                      <span className="text-sm">+40 727 336 169</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">
                  Navigare
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Acasă</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/despre-noi"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Despre Noi</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/servicii"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Servicii</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/portofoliu"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Portofoliu</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cariere"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Cariere</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">
                  Servicii
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/servicii#certificari"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Machine Safety</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/servicii#automatizari"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Automatizări</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/servicii#sisteme"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Sisteme Metalice</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/servicii#electrice"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Instalații Electrice</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Corox Engineering SRL. Toate
              drepturile rezervate.
            </p>
            <div className="flex items-center space-x-6 text-xs text-slate-500 uppercase tracking-wide">
              <span>CUI: RO123456789</span>
              <span>J35/123/2020</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
