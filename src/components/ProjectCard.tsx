import { Cog, Award, Wrench, Zap, Bot, Users } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  client: string
  year: string
  iconType?: 'automation' | 'certification' | 'metal' | 'electrical' | 'robotics' | 'consulting'
}

export default function ProjectCard({
  title,
  description,
  tags,
  client,
  year,
  iconType = 'automation'
}: ProjectCardProps) {
  // Define specific icons for each project type
  const getIcon = () => {
    switch (iconType) {
      case 'automation':
        return <Cog className="w-5 h-5 text-white" />
      case 'certification':
        return <Award className="w-5 h-5 text-white" />
      case 'metal':
        return <Wrench className="w-5 h-5 text-white" />
      case 'electrical':
        return <Zap className="w-5 h-5 text-white" />
      case 'robotics':
        return <Bot className="w-5 h-5 text-white" />
      case 'consulting':
        return <Users className="w-5 h-5 text-white" />
      default:
        return <Cog className="w-5 h-5 text-white" />
    }
  }

  return (
    <div className="border-l-4 border-slate-300 bg-gray-50 pl-8 py-8 pr-8">
      <div className="mb-6">
        <div className="w-10 h-10 bg-slate-700 flex items-center justify-center mb-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
          {title}
        </h3>
        <p className="text-gray-600 text-left leading-relaxed mb-4">
          {description}
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
          <p><span className="font-medium text-gray-900">Client:</span> {client}</p>
          <p><span className="font-medium text-gray-900">An:</span> {year}</p>
        </div>
      </div>
    </div>
  )
}
