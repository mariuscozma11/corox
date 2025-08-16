'use client'

import { useState } from 'react'
import Link from 'next/link'
import { servicesNavLinks } from '@/data/services'

export default function ServicesNavDropdown() {
	const [open, setOpen] = useState(false)
	return (
		<div
			className="relative"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<Link href="/servicii" className="text-primary hover:text-slate-600 transition-all duration-200 font-medium whitespace-nowrap">
				Servicii
			</Link>
			{open && (
				<div className="absolute left-0 top-full w-64 bg-white border border-slate-200 shadow-lg rounded-md py-2 z-50">
					{servicesNavLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="block px-4 py-2 text-sm text-primary hover:bg-slate-50 hover:text-slate-600 transition-colors"
						>
							{item.label}
						</Link>
					))}
				</div>
			)}
		</div>
	)
}