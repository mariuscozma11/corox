"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function PoliticaCookies() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">
              Politica de Cookies
            </h1>
            
          </div>
        </div>
      </section>

      {/* Declaration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8">
            <div className="prose max-w-none">
              <div id="CookieDeclaration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookiebot Declaration Script */}
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/7ef6150c-67e5-4230-9941-312c6ff61fd3/cd.js"
        type="text/javascript"
        async
      />
    </main>
  );
}
