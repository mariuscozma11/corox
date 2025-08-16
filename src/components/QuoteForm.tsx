'use client'

import { useState } from 'react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Mulțumim pentru cererea de ofertă! Vă vom contacta în curând.')
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="space-y-8">
              {/* Form Header */}
        <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Informații Contact</h3>
        <p className="text-sm text-gray-600">Completați formularul pentru a primi o ofertă personalizată</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Nume complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
                placeholder="Ex. Ion Popescu"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
                placeholder="Ex. ion.popescu@companie.ro"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
                placeholder="Ex. +40 123 456 789"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-900">
                Companie
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
                placeholder="Ex. ABC Manufacturing SRL"
              />
            </div>
          </div>
        </div>

        {/* Service Selection Section */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-900">Serviciu Solicitat</h4>
          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium text-gray-900">
              Serviciu de interes
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
            >
              <option value="">Selectați un serviciu</option>
              <option value="machine-safety">Machine Safety și Evaluări</option>
              <option value="automatizari">Automatizări Industriale</option>
              <option value="sisteme-metalice">Sisteme și Structuri Metalice</option>
              <option value="instalatii-electrice">Automatizări și Instalații Electrice</option>
              <option value="produse-standardizate">Produse Standardizate</option>
              <option value="altul">Alt serviciu</option>
            </select>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-900">Detalii Proiect</h4>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-900">
              Descrierea proiectului *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descrieți în detaliu proiectul, cerințele tehnice, termenele și orice alte informații relevante..."
              className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all resize-vertical"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full cursor-pointer bg-primary text-white py-4 px-6 font-medium hover:bg-slate-600 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Trimite cererea de ofertă</span>
          </button>
        </div>

        {/* Form Footer */}
        <div className="border-t-2 border-slate-100 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed">
            Prin trimiterea acestui formular sunteți de acord ca datele personale să fie procesate 
            conform politicii de confidențialitate. Vă vom contacta în termen de 24-48 ore cu o ofertă detaliată.
          </p>
        </div>
      </form>
    </div>
  )
}
