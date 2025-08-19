import React from 'react'

interface SeitelShopCardProps {
  title: string
  description: string
  href: string
  ctaLabel: string
  className?: string
}

export default function SeitelShopCard({
  title,
  description,
  href,
  ctaLabel,
  className = '',
}: SeitelShopCardProps) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6 lg:p-8 shadow-sm flex flex-col items-stretch min-w-0 ${className}`}>
      <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{title}</h4>
      <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-5 lg:mb-6">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 sm:px-6 lg:px-8 py-3 lg:py-4 text-white font-semibold shadow-lg hover:bg-slate-600 transition-all duration-300 whitespace-nowrap box-border overflow-hidden text-ellipsis"
        aria-label={ctaLabel}
      >
        {ctaLabel}
        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}

