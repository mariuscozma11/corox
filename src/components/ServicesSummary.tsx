import { serviceCategories } from '@/data/services'
import ServiceCategory from './ServiceCategory'

export default function ServicesSummary() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{serviceCategories.map((category) => (
				<div key={category.id} className="border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8">
					<ServiceCategory category={category} variant="short" />
				</div>
			))}
		</div>
	)
}