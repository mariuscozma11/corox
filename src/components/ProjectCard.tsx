import { Cog, Award, Wrench, Zap, Bot, Users } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  client: string
  year: string
  iconType?: 'automation' | 'certification' | 'metal' | 'electrical' | 'robotics' | 'consulting'
  images?: { src: string; alt?: string }[]
  onClick?: () => void
}

export default function ProjectCard({
  title,
  description,
  tags,
  client,
  year,
  iconType = 'automation',
  images,
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
      className={`border-l-4 border-slate-300 bg-gray-50 h-full overflow-hidden group ${onClick ? 'cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] focus-within:shadow-lg hover:border-primary/50' : ''}`}
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
      {/* Thumbnail Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        {images && images.length > 0 ? (
          <>
            <img
              src={images[0].src}
              alt={images[0].alt || title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Semi-transparent overlay with project icon */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                {getIcon()}
              </div>
            </div>
            {/* Image count indicator */}
            {images.length > 1 && (
              <div className="absolute top-3 right-3 bg-white/90 text-slate-700 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                +{images.length - 1}
              </div>
            )}
          </>
        ) : (
          /* Fallback when no images - show icon on gradient background */
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center shadow-lg">
              {getIcon()}
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="pl-8 py-8 pr-8">
        <div className="mb-6">
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
                className="px-3 py-1 text-xs font-medium bg-slate-200 text-slate-700 uppercase tracking-wide rounded-full transition-colors duration-200 hover:bg-primary/10 hover:text-primary/80"
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
    </div>
  )
}
