"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: `Telefon: ${formData.phone || '-'}\nCompanie: ${formData.company || '-'}\nServiciu: ${formData.service || '-'}\n\nMesaj:\n${formData.message}`,
      };

      const res = await fetch("https://formcarry.com/s/YoQC-Ps4OFl", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
             // Check if the response is ok (status 200-299)
       if (res.ok) {
         setSuccess("Vă mulțumim! Am primit solicitarea dumneavoastră.");
         setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
         // Reset form data instead of calling reset() on potentially null currentTarget
       } else {
        // Try to get error details from response
        try {
          const json = await res.json()
          setError(json?.message || `Eroare ${res.status}: ${res.statusText}`)
        } catch {
          setError(`Eroare ${res.status}: ${res.statusText}`)
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Eroare de rețea";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Form Header */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Informații Contact
        </h3>
        <p className="text-sm text-gray-600">
          Completați formularul pentru a primi o ofertă personalizată
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
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
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900"
              >
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
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-900"
              >
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
          <h4 className="text-md font-semibold text-gray-900">
            Serviciu Solicitat
          </h4>
          <div className="space-y-2">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-900"
            >
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
              <option value="instalatii-electrice">Instalații electrice</option>
              <option value="machine-safety">Machine Safety</option>
              <option value="solutii-de-automatizare">
                Soluții de automatizare
              </option>
              <option value="proiectare-si-executie">
                Proiectare & execuție
              </option>
              <option value="distributie">
                Distribuție produse & echipamente
              </option>
              <option value="altul">Alt serviciu</option>
            </select>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-900">
            Detalii Proiect
          </h4>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900"
            >
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
            disabled={submitting}
            className="w-full cursor-pointer bg-primary text-white py-4 px-6 font-medium hover:bg-slate-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60"
          >
            <span>{submitting ? 'Se trimite...' : 'Trimite cererea de ofertă'}</span>
          </button>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
          {success && <p className="mt-3 text-sm text-green-600">{success}</p>}
        </div>

        {/* Form Footer */}
        <div className="border-t-2 border-slate-100 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed">
            Prin trimiterea acestui formular sunteți de acord ca datele
            personale să fie procesate conform politicii de confidențialitate.
            Vă vom contacta în termen de 24-48 ore cu o ofertă detaliată.
          </p>
        </div>
      </form>
    </div>
  );
}
