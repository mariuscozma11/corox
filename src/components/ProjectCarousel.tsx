'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import ProjectModal, { ProjectDetail } from './ProjectModal'

interface Project {
  title: string
  description: string
  tags: string[]
  client: string
  year: string
  iconType: 'automation' | 'certification' | 'metal' | 'electrical' | 'robotics' | 'consulting'
  images?: { src: string; alt?: string }[]
}

interface ProjectCarouselProps {
  projects: Project[]
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [openProject, setOpenProject] = useState<ProjectDetail | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Calculate how many cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(3)

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1) // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2) // Tablet: 2 cards
      } else {
        setCardsToShow(3) // Desktop: 3 cards
      }
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  const maxIndex = Math.max(0, projects.length - cardsToShow)

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => Math.max(0, prev - 1))
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(Math.max(0, Math.min(maxIndex, index)))
    setTimeout(() => setIsTransitioning(false), 300)
  }

  // Touch/Swipe functionality
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < maxIndex) {
      goToNext()
    }
    if (isRightSwipe && currentIndex > 0) {
      goToPrevious()
    }
  }

  const openModalFor = (p: Project) => {
    const images = p.images && p.images.length > 0
      ? p.images
      : [
          { src: '/next.svg', alt: p.title },
          { src: '/vercel.svg', alt: p.title },
        ]

    const detail: ProjectDetail = {
      title: p.title,
      description: p.description,
      images,
      tags: p.tags,
      client: p.client,
      year: p.year,
    }
    setOpenProject(detail)
  }

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        disabled={currentIndex === 0 || isTransitioning}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-slate-600 ${
          currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
        }`}
        aria-label="Proiectul anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        disabled={currentIndex === maxIndex || isTransitioning}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-slate-600 ${
          currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'
        }`}
        aria-label="Proiectul următor"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container with Fixed Card Sizing */}
      <div className="overflow-hidden mx-8">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${100 / cardsToShow}%`,
                paddingLeft: cardsToShow === 1 ? '0' : '0.75rem',
                paddingRight: cardsToShow === 1 ? '0' : '0.75rem',
              }}
            >
              <div className="h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  client={project.client}
                  year={project.year}
                  iconType={project.iconType}
                  onClick={() => openModalFor(project)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-slate-700'
                : 'bg-slate-300 hover:bg-slate-500'
            }`}
            aria-label={`Mergi la pagina ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="mt-4 text-center">
        <span className="text-sm text-slate-600">
          {currentIndex + 1} din {maxIndex + 1}
        </span>
      </div>

      <ProjectModal open={!!openProject} onClose={() => setOpenProject(null)} project={openProject} />
    </div>
  )
}