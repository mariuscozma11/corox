import { ShieldCheck, Zap, Cog, Wrench, Package } from 'lucide-react'
import type { ComponentType } from 'react'

export type LucideIconType = ComponentType<{ className?: string }>

export interface ServiceGroup {
	name: string
	items: string[]
}

export interface ServiceCategory {
	id: string
	slug: string
	name: string
	icon: LucideIconType
	longDescription: string
	shortDescription: string
	primary?: boolean
	groups?: ServiceGroup[]
}

export const serviceCategories: ServiceCategory[] = [
	{
		id: 'electrical-installations',
		slug: 'instalatii-electrice',
		name: 'Instalații electrice',
		icon: Zap,
		primary: true,
		shortDescription:
			'Soluții complete pentru tablouri și instalații electrice industriale cu comenzi de vigoare, incluzând verificări și măsurători conform normativelor.',
		longDescription:
			'Pentru a asigura buna funcționare a instalațiilor automatizate cu comenzi de vigoare, oferim o gamă variată de servicii de proiectare, execuție și verificări complete. Specializăm în tablouri electrice industriale și instalații electrice la standarde înalte de siguranță și performanță.',
		groups: [
			{
				name: 'Tablouri electrice industriale',
				items: ['Proiectare', 'Execuție', 'Verificări termografice'],
			},
			{
				name: 'Instalații electrice',
				items: ['Proiectare', 'Execuție', 'Verificări de continuitate'],
			},
			{
				name: 'Măsurători și verificări electrice',
				items: ['Măsurători PRAM', 'PAT (protecția prin legare la pământ)', 'Verificări termografice', 'Măsurători luminotehnice'],
			},
			{
				name: 'Documentație și siguranță',
				items: ['Întocmirea documentației pentru siguranță', 'Verificarea echipamentului de protecție', 'Protecția împotriva descărcărilor electrice'],
			},
		],
	},
	{
		id: 'machine-safety',
		slug: 'machine-safety',
		name: 'Machine Safety',
		icon: ShieldCheck,
		shortDescription:
			'Evaluări de risc, măsurători și certificări CE pentru echipamente industriale conform standardelor europene.',
		longDescription:
			'Specializăm în evaluări complete de risc și certificări CE pentru echipamente industriale. Oferim măsurători de siguranță, analize conform SR EN ISO 12100 și întregul proces de certificare cu documentație tehnică completă pentru asigurarea conformității cu standardele europene.',
		groups: [
			{ name: 'Măsurători de siguranță', items: ['Teste electrice și funcționale', 'Verificări de protecție', 'Măsurători de izolație'] },
			{ name: 'Evaluări de risc', items: ['Analiză SR EN ISO 12100', 'Definire măsuri de reducere a riscurilor', 'Implementare soluții de protecție'] },
			{ name: 'Certificări CE', items: ['Documentație tehnică completă', 'Marcaj CE', 'Declarație de conformitate', 'Verificări finale'] },
		],
	},
	{
		id: 'automation-solutions',
		slug: 'solutii-de-automatizare',
		name: 'Soluții de automatizare',
		icon: Cog,
		shortDescription:
			'Soluții complete de automatizare industrială: de la concept la implementare, incluzând PLC & SCADA, roboți și mentenanță.',
		longDescription:
			'Oferim servicii complete de automatizare industrială, de la proiectare și concept până la implementare și mentenanță. Specializăm în programare PLC & SCADA, integrare de roboți industriali și colaborativi, cu focus pe eficiență și siguranță.',
		groups: [
			{ name: 'Proiectare și concept', items: ['Analiză proces industrial', 'Specificații funcționale', 'Arhitectură sistem automatizat'] },
			{ name: 'Programare PLC & SCADA', items: ['Siemens, Allen-Bradley', 'SCADA/HMI', 'Rețele industriale', 'Comunicare OPC'] },
			{ name: 'Integrare roboți', items: ['Roboți industriali', 'Roboți colaborativi (coboți)', 'Sisteme de siguranță', 'Programare și calibrare'] },
			{ name: 'Mentenanță electrică', items: ['Diagnostică preventivă', 'Intervenții curative', 'Planificare mentenanță', 'Optimizare performanță'] },
			{ name: 'Fabricare și implementare', items: ['Asamblare panouri de comandă', 'Cablați industriale', 'Punere în funcțiune', 'Testare și validare'] },
		],
	},
	{
		id: 'design-execution',
		slug: 'proiectare-si-executie',
		name: 'Proiectare și execuție',
		icon: Wrench,
		shortDescription:
			'Servicii integrate de proiectare și execuție electrică și mecanică pentru sisteme industriale.',
		longDescription:
			'Acoperim întregul ciclul de viață al proiectelor electrice și mecanice industriale: de la proiectare și validare până la execuție și documentație completă, cu management tehnic și de calitate conform standardelor europene.',
		groups: [
			{ name: 'Proiectare electrică', items: ['Proiectare circuite de comandă', 'Scheme electrice industriale', 'Calculul și dimensionarea componentelor'] },
			{ name: 'Execuție electrică', items: ['Montaj tablouri electrice', 'Cablați industriale', 'Punere în funcțiune și testare'] },
			{ name: 'Proiectare mecanică', items: ['Modelare 3D parametrică', 'Desene de execuție', 'Calculul de rezistență'] },
			{ name: 'Execuție mecanică', items: ['Montaj și asamblare', 'Calibrare și ajustare', 'Testare funcțională'] },
		],
	},
	{
		id: 'distribution-products',
		slug: 'distributie-produse-echipamente',
		name: 'Distribuție produse și echipamente',
		icon: Package,
		shortDescription:
			'Distribuție de echipamente și componente industriale cu suport tehnic specializat și opțiuni de achiziție flexibile.',
		longDescription:
			'Asigurăm distribuția de echipamente și componente industriale de înaltă calitate, cu suport tehnic specializat și consultanță. Oferim opțiuni flexibile de achiziție, inclusiv one-time purchase pentru proiecte punctuale.',
		groups: [
			{ name: 'Echipamente industriale', items: ['Echipamente de automatizare', 'Componente electrice', 'Sisteme de protecție'] },
			{ name: 'Componente specializate', items: ['PLC și module', 'Senzori și actuatori', 'Echipamente de siguranță'] },
			{ name: 'Suport și servicii', items: ['Consultanță tehnică', 'Suport post-vânzare', 'Training și documentație'] },
		],
	},
]

export const servicesNavLinks = serviceCategories.map((c) => ({
	href: `/servicii#${c.slug}`,
	label: c.name,
	icon: c.icon,
}))