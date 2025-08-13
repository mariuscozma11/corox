'use client'

import { useState } from 'react'

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    availability: '',
    coverLetter: '',
    cvFile: null as File | null,
    consent: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Career application submitted:', formData)
    alert('Mulțumim pentru aplicație! Vă vom contacta în curând.')
    setFormData({ 
      firstName: '', 
      lastName: '', 
      email: '', 
      phone: '', 
      position: '', 
      experience: '', 
      education: '', 
      availability: '', 
      coverLetter: '', 
      cvFile: null,
      consent: false 
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData({
      ...formData,
      cvFile: file
    })
  }

  return (
    <div className="space-y-8">
      {/* Form Header */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Informații Personale</h3>
        <p className="text-sm text-gray-600">Completează datele tale pentru a aplica la poziția dorită</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                Prenume *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
                placeholder="Ex. Ion"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
                Nume *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
                placeholder="Ex. Popescu"
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
                placeholder="Ex. ion.popescu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
                placeholder="Ex. +40 123 456 789"
              />
            </div>
          </div>
        </div>

        {/* Position Details Section */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-900">Detalii Poziție</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="position" className="block text-sm font-medium text-gray-900">
                Poziție dorită *
              </label>
              <select
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
              >
                <option value="">Selectează poziția</option>
                <option value="inginer-machine-safety">Inginer Machine Safety</option>
                <option value="inginer-automatizari">Inginer Automatizări Industriale</option>
                <option value="tehnician-sisteme-electrice">Tehnician Sisteme Electrice</option>
                <option value="alta-pozitie">Altă poziție</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-900">
                Ani de experiență *
              </label>
              <select
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
              >
                <option value="">Selectează experiența</option>
                <option value="0-1">0-1 ani</option>
                <option value="1-3">1-3 ani</option>
                <option value="3-5">3-5 ani</option>
                <option value="5-10">5-10 ani</option>
                <option value="10+">Peste 10 ani</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="education" className="block text-sm font-medium text-gray-900">
                Nivel educație *
              </label>
              <select
                id="education"
                name="education"
                required
                value={formData.education}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
              >
                <option value="">Selectează nivelul</option>
                <option value="liceu">Liceu</option>
                <option value="facultate">Facultate</option>
                <option value="master">Master</option>
                <option value="doctorat">Doctorat</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="availability" className="block text-sm font-medium text-gray-900">
                Disponibilitate *
              </label>
              <select
                id="availability"
                name="availability"
                required
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
              >
                <option value="">Selectează disponibilitatea</option>
                <option value="imediat">Imediat</option>
                <option value="1-saptamana">1 săptămână</option>
                <option value="2-saptamani">2 săptămâni</option>
                <option value="1-luna">1 lună</option>
                <option value="negociabil">Negociabil</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cover Letter Section */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-900">Scrisoare de Intenție</h4>
          <div className="space-y-2">
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-900">
              Scrisoare de motivație *
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              required
              rows={6}
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Descrie motivația ta pentru această poziție, experiența relevantă și ce poți aduce echipei noastre..."
              className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all resize-vertical"
            />
          </div>
        </div>

        {/* CV Upload Section */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-900">CV și Documente</h4>
          <div className="space-y-2">
            <label htmlFor="cvFile" className="block text-sm font-medium text-gray-900">
              CV/Resume *
            </label>
            <div className="space-y-3">
              <input
                type="file"
                id="cvFile"
                name="cvFile"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-slate-600 file:cursor-pointer"
              />
              <div className="text-xs text-gray-500 space-y-1">
                <p>Formate acceptate: PDF, DOC, DOCX</p>
                <p>Dimensiunea maximă: 5 MB</p>
                {formData.cvFile && (
                  <p className="text-primary font-medium">
                    Fișier selectat: {formData.cvFile.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Consent Section */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-primary border-2 border-slate-200 focus:ring-primary"
            />
            <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
              Sunt de acord ca datele personale să fie procesate conform politicii de confidențialitate 
              în scopul evaluării candidaturii pentru poziția selectată. *
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 px-6 font-medium hover:bg-slate-600 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Trimite Aplicația</span>
          </button>
        </div>

        {/* Form Footer */}
        <div className="border-t-2 border-slate-100 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed">
            Prin trimiterea acestui formular confirmi că informațiile furnizate sunt corecte și complete. 
            Vei fi contactat în termen de 5-7 zile lucrătoare dacă profilul tău corespunde cerințelor poziției.
          </p>
        </div>
      </form>
    </div>
  )
}