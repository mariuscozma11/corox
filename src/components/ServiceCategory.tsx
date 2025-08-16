import { type ServiceCategory } from '@/data/services'

interface Props {
	category: ServiceCategory
	variant?: 'long' | 'short'
}

export default function ServiceCategory({ category, variant = 'long' }: Props) {
	const Icon = category.icon
	return (
		<div className={variant === 'long' ? 'border-l-4 border-slate-400 bg-white pl-8 py-8 pr-8' : ''}>
			<div className="mb-6">
				<div className="w-10 h-10 flex items-center justify-center mb-4">
					<Icon className="w-7 h-7 text-primary" />
				</div>
				<h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">{category.name}</h3>
				<p className={`text-gray-600 text-left leading-relaxed ${variant === 'long' ? 'mb-4' : ''}`}>
					{variant === 'long' ? category.longDescription : category.shortDescription}
				</p>
			</div>
			{variant === 'long' && category.groups?.length ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{category.groups.map((group) => (
						<div key={group.name} className="border-l-2 border-slate-200 pl-6">
							<h4 className="font-semibold text-gray-900 mb-3 text-left">{group.name}</h4>
							<div className="space-y-2">
								{group.items.map((item) => (
									<div key={item} className="flex items-start space-x-3">
										<div className="w-1 h-1 bg-slate-400 mt-2 flex-shrink-0" />
										<span className="text-sm text-gray-600">{item}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			) : null}
		</div>
	)
}