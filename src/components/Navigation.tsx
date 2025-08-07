'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b-2 border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-700 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">Corox Engineering</span>
              <div className="text-xs text-slate-500 uppercase tracking-wide font-medium">Industrial Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium">
              Acasă
            </Link>
            <Link href="/despre-noi" className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium">
              Despre Noi
            </Link>
            <Link href="/servicii" className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium">
              Servicii
            </Link>
            <Link href="/portofoliu" className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium">
              Portofoliu
            </Link>
            <Link href="/contact" className="bg-slate-700 text-white px-6 py-3 hover:bg-slate-800 transition-all duration-200 font-medium flex items-center space-x-2">
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-slate-900 focus:outline-none p-2"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-slate-100">
            <div className="py-6 space-y-4">
              <Link 
                href="/" 
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-slate-50 transition-all duration-200 font-medium border-l-2 border-transparent hover:border-slate-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Acasă
              </Link>
              <Link 
                href="/despre-noi" 
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-slate-50 transition-all duration-200 font-medium border-l-2 border-transparent hover:border-slate-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Despre Noi
              </Link>
              <Link 
                href="/servicii" 
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-slate-50 transition-all duration-200 font-medium border-l-2 border-transparent hover:border-slate-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicii
              </Link>
              <Link 
                href="/portofoliu" 
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-slate-50 transition-all duration-200 font-medium border-l-2 border-transparent hover:border-slate-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Portofoliu
              </Link>
              <div className="px-4">
                <Link 
                  href="/contact" 
                  className="block bg-slate-700 text-white px-6 py-4 hover:bg-slate-800 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
