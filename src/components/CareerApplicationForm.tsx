"use client";

import { useState } from "react";

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

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
    setShowSuccess(false);

    try {
      const payload = {
        access_key: "1109e53f-fbea-4d16-9c9f-9ee396744ebb",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        message: formData.message,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.status === 200) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
      } else {
        setError(json.message || `Eroare ${res.status}: ${res.statusText}`);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Eroare de rețea";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  if (showSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-900 mb-2">
          Aplicația a fost trimisă cu succes!
        </h3>
        <p className="text-green-700">
          Vă mulțumim pentru interes! Vă vom contacta în cel mai scurt timp.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Form Header */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Informații Personale
        </h3>
        <p className="text-sm text-gray-600">
          Completați formularul pentru a aplica la poziția dorită
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
                placeholder="Ex. ion.popescu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900"
              >
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

            <div className="space-y-2">
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-900"
              >
                Poziția dorită *
              </label>
              <input
                type="text"
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
                placeholder="Ex. Inginer de automatizare"
              />
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-900">
            Experiență și Calificări
          </h4>
          <div className="space-y-2">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-900"
            >
              Ani de experiență
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-slate-200 bg-white focus:border-primary focus:outline-none transition-all"
            >
              <option value="">Selectați experiența</option>
              <option value="0-1">0-1 ani</option>
              <option value="1-3">1-3 ani</option>
              <option value="3-5">3-5 ani</option>
              <option value="5-10">5-10 ani</option>
              <option value="10+">10+ ani</option>
            </select>
          </div>
        </div>

        {/* Message Section */}
        <div className="space-y-4">
          <h4 className="text-md font-semibold text-gray-900">
            Mesaj și Motivație
          </h4>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-900"
            >
              De ce doriți să lucrați cu noi? *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descrieți motivația, experiența relevantă și de ce credeți că sunteți potrivit pentru această poziție..."
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
            <span>{submitting ? 'Se trimite...' : 'Trimite aplicația'}</span>
          </button>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
        </div>

        {/* Form Footer */}
        <div className="border-t-2 border-slate-100 pt-6">
          <p className="text-xs text-gray-500 leading-relaxed">
            Prin trimiterea acestui formular sunteți de acord ca datele
            personale să fie procesate conform politicii de confidențialitate.
            Vă vom contacta în cel mai scurt timp cu privire la aplicația dumneavoastră.
          </p>
        </div>
      </form>
    </div>
  );
}