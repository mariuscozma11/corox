import { Cog, Award, Wrench, Zap, Bot, Users } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  client: string
  year: string
  iconType?: 'automation' | 'certification' | 'metal' | 'electrical' | 'robotics' | 'consulting'
  onClick?: () => void
}

export default function ProjectCard({
  title,
  description,
  tags,
  client,
  year,
  iconType = 'automation',
  onClick,
}: ProjectCardProps) {
  // Define specific icons for each project type
  const getIcon = () => {
    switch (iconType) {
      case 'automation':
        return <Cog className="w-6 h-6 text-primary" />
      case 'certification':
        return <Award className="w-6 h-6 text-primary" />
      case 'metal':
        return <Wrench className="w-6 h-6 text-primary" />
      case 'electrical':
        return <Zap className="w-6 h-6 text-primary" />
      case 'robotics':
        return <Bot className="w-6 h-6 text-primary" />
      case 'consulting':
        return <Users className="w-6 h-6 text-primary" />
      default:
        return <Cog className="w-6 h-6 text-primary" />
    }
  }

  return (
    <div
      className={`border-l-4 border-slate-300 bg-gray-50 pl-8 py-8 pr-8 h-full ${onClick ? 'cursor-pointer transition-shadow hover:shadow-lg focus-within:shadow-lg' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={(e) => {
        if (!onClick) return
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={onClick ? `Deschide detalii pentru proiectul ${title}` : undefined}
    >
      <div className="mb-6">
        <div className="w-12 h-12 flex items-center justify-center mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
          {title}
        </h3>
        <p className="text-gray-600 text-left leading-relaxed mb-4">
          {description.length > 120 ? `${description.substring(0, 120)}...` : description}
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium bg-slate-200 text-slate-700 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p><span className="font-medium text-gray-900">An:</span> {year}</p>
        </div>
      </div>
    </div>
  )
}
