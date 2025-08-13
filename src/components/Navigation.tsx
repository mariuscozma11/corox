'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/despre-noi', label: 'Despre' },
    { href: '/servicii', label: 'Servicii' },
    { href: '/portofoliu', label: 'Portofoliu' },
    { href: '/cariere', label: 'Cariere' },
  ]

  return (
    <nav className="bg-white border-b-2 border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <Image 
              className="border-2 border-secondary rounded-full w-12 h-12 sm:w-16 sm:h-16" 
              src="/logo-color.svg" 
              alt="Corox Engineering" 
              width={64} 
              height={64} 
            />
            <div className="min-w-0">
              <span className="text-lg sm:text-xl font-bold text-primary tracking-tight block truncate">Corox Engineering</span>
              <div className="text-xs text-slate-500 uppercase tracking-wide font-medium hidden sm:block">Industrial Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-primary hover:text-slate-600 transition-all duration-200 font-medium whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-primary text-white px-4 py-2 lg:px-6 lg:py-3 hover:bg-slate-600 transition-all duration-200 font-medium flex items-center space-x-2 whitespace-nowrap">
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex-shrink-0">
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
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="block px-4 py-3 text-primary hover:text-slate-600 hover:bg-slate-50 transition-all duration-200 font-medium border-l-2 border-transparent hover:border-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4">
                <Link 
                  href="/contact" 
                  className="block bg-primary text-white px-6 py-4 hover:bg-slate-600 transition-all duration-200 font-medium"
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
