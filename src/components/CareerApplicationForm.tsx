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
    consent: false
  })
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      setSubmitting(true)
      setResult(null)

      const res = await fetch('https://formcarry.com/s/YoQC-Ps4OFl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: `Telefon: ${formData.phone}\nPoziție: ${formData.position}\nExperiență: ${formData.experience}\nEducație: ${formData.education}\nDisponibilitate: ${formData.availability}\n\nScrisoare:\n${formData.coverLetter}`
        })
      })
      
      // Check if the response is ok (status 200-299)
      if (res.ok) {
        setShowSuccess(true)
        setFormData({ 
          firstName: '', lastName: '', email: '', phone: '', position: '', experience: '', education: '', availability: '', coverLetter: '', consent: false 
        })
        e.currentTarget.reset()
      } else {
        // Try to get error details from response
        try {
          const json = await res.json()
          setResult(json?.message || `Eroare ${res.status}: ${res.statusText}`)
        } catch {
          setResult(`Eroare ${res.status}: ${res.statusText}`)
        }
      }
    } catch (err) {
      setResult('Eroare de rețea. Încearcă din nou mai târziu.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }



  if (showSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-green-800 mb-2">Aplicație trimisă cu succes!</h3>
        <p className="text-green-700">Mulțumim! Aplicația ta a fost trimisă cu succes. Te vom contacta în curând!</p>
        <button
          onClick={() => setShowSuccess(false)}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Trimite o altă aplicație
        </button>
      </div>
    )
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

        {/* Scrisoare de Intenție */}
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
              placeholder="Descrie motivația ta pentru această poziție..."
              className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all resize-vertical"
            />
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
            disabled={submitting}
            className="w-full bg-primary text-white py-4 px-6 font-medium hover:bg-slate-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60"
          >
            <span>{submitting ? 'Se trimite...' : 'Trimite Aplicația'}</span>
          </button>
          {result && (
            <p className="mt-3 text-sm text-gray-700">{result}</p>
          )}
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