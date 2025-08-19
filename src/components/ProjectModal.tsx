'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface ProjectDetail {
  title: string
  description: string
  images: { src: string; alt?: string }[]
  tags: string[]
  client: string
  year: string
}

interface ProjectModalProps {
  open: boolean
  onClose: () => void
  project?: ProjectDetail | null
}

export default function ProjectModal({ open, onClose, project }: ProjectModalProps) {
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)

  // Reset index and zoom when project changes or modal opens
  useEffect(() => {
    if (open) {
      setIndex(0)
      setZoom(false)
    }
  }, [open, project])

  const images = project?.images ?? []
  const total = images.length

  const goPrev = useCallback(() => {
    if (!total) return
    setIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const goNext = useCallback(() => {
    if (!total) return
    setIndex((prev) => (prev + 1) % total)
  }, [total])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoom) {
          setZoom(false)
        } else {
          onClose()
        }
      }
      if (!zoom) {
        if (e.key === 'ArrowLeft') goPrev()
        if (e.key === 'ArrowRight') goNext()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose, goPrev, goNext, zoom])

  if (!open || !project) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => (zoom ? setZoom(false) : onClose())} />

      {/* Dialog */}
      <div className="relative z-[101] w-full max-w-5xl bg-white rounded-lg shadow-xl border-l-4 border-slate-400">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 p-2 text-slate-600 hover:text-slate-900"
          aria-label="Închide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Gallery */}
            <div>
              <div className="relative">
                <button
                  type="button"
                  className="aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center cursor-zoom-in"
                  onClick={() => setZoom(true)}
                  aria-label="Mărește imaginea"
                  title="Click pentru mărire"
                >
                  {!!total && (
                    <Image
                      src={images[index]?.src}
                      alt={images[index]?.alt ?? project.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                    />)
                  }
                </button>
                {/* Index overlay */}
                {total > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {index + 1} / {total}
                  </div>
                )}
                {/* Nav arrows */}
                {total > 1 && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-800 shadow hover:bg-white"
                      onClick={goPrev}
                      aria-label="Imagine anterioară"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-800 shadow hover:bg-white"
                      onClick={goNext}
                      aria-label="Imagine următoare"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {total > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto">
                  {images.map((img, i) => (
                    <button
                      key={`${img.src}-${i}`}
                      className={`relative flex-shrink-0 overflow-hidden rounded-md border ${i === index ? 'border-primary ring-2 ring-primary/40' : 'border-slate-200'}`}
                      style={{ width: 72, height: 54 }}
                      onClick={() => setIndex(i)}
                      aria-label={`Alege imaginea ${i + 1}`}
                    >
                      <Image src={img.src} alt={img.alt ?? project.title} width={144} height={108} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-slate-200 text-slate-700 uppercase tracking-wide">{tag}</span>
                  ))}
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><span className="font-medium text-gray-900">Client:</span> {project.client}</p>
                  <p><span className="font-medium text-gray-900">An:</span> {project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom overlay */}
      {zoom && (
        <div className="absolute inset-0 z-[110] flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setZoom(false)}>
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative z-[111] max-w-[95vw] max-h-[95vh]">
            <Image
              src={images[index]?.src}
              alt={images[index]?.alt ?? project.title}
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

