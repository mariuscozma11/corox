"use client";
import { Mail, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { servicesNavLinks } from "@/data/services";
import { useState } from "react";

export default function Footer() {
  const [isIsoDialogOpen, setIsIsoDialogOpen] = useState(false);

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
                      RO30619298 / J2012002129351
                      <br />
                      Str. Calea Lugojului Nr 134/3
                      <br />
                      Ghiroda, Timiș, România
                    </p>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="mailto:office@coroxengineering.ro"
                      className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-200 group"
                    >
                      <Mail className="w-6" />
                      <span className="text-sm">
                        office@coroxengineering.ro
                      </span>
                    </a>
                    <a
                      href="tel:+40256201077"
                      className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-200 group"
                    >
                      <Phone className="w-6" />
                      <span className="text-sm">+40 256 201 077</span>
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
                    <Link
                      href="/"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Acasă</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/despre-noi"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Despre Noi</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portofoliu"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Portofoliu</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Contact</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cariere"
                      className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                      <span>Cariere</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">
                  Servicii
                </h4>
                <ul className="space-y-3">
                  {servicesNavLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-white hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                      >
                        <div className="w-1 h-1 bg-slate-500 group-hover:bg-white transition-all"></div>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
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
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <Link
                href="/politica-de-conf"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Politica de Confidențialitate
              </Link>
              <Link
                href="/politica-cookies"
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                Politica Cookies
              </Link>
              <div className="flex lg:flex-row flex-col gap-2 space-x-2">
                <Link
                  href="https://anpc.ro/ce-este-sal/"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center"
                >
                  <Image
                    src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sal.svg"
                    alt="Soluționarea Alternativă a Litigiilor"
                    width={250}
                    height={100}
                    className="h-8 w-auto"
                  />
                </Link>
                <Link
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="nofollow"
                  className="flex items-center"
                >
                  <Image
                    src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sol.svg"
                    alt="Soluționarea Online a Litigiilor"
                    width={250}
                    height={100}
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsIsoDialogOpen(true)}
                  className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
                  title="Click to view larger"
                >
                  <Image
                    src="/ISO_9001-2015.svg"
                    alt="ISO 9001:2015 Certified"
                    width={80}
                    height={80}
                    className="h-8 w-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ISO Certification Dialog */}
      {isIsoDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                ISO 9001:2015 Certification
              </h3>
              <button
                onClick={() => setIsIsoDialogOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 text-center">
              <Image
                src="/ISO_9001-2015.svg"
                alt="ISO 9001:2015 Certified - Full Size"
                width={400}
                height={400}
                className="w-full h-auto max-w-md mx-auto"
              />
              <div className="mt-6 text-gray-600">
                <p className="font-medium mb-2">Corox Engineering SRL</p>
                <p className="text-sm">
                  Certified to ISO 9001:2015 Quality Management System
                </p>
                <p className="text-sm mt-2">
                  This certification demonstrates our commitment to quality,
                  continuous improvement, and customer satisfaction in all our
                  industrial automation and Machine Safety services.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
