'use client'

import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ImageModal } from '@/components/ImageModal'
import { Gallery } from '@/types'

interface GalleryContentProps {
  gallery: Gallery
}

export function GalleryContent({ gallery }: GalleryContentProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('')

  return (
    <div className="bg-white">
      <Navigation />
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Link
              href="/galleries"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              ← Back to Galleries
            </Link>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {gallery.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {gallery.description}
            </p>
          </div>

          <div className="space-y-20">
            {gallery.images.map((image) => (
              <div key={image.id} className="relative">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Before Image */}
                  <div className="relative">
                    <div 
                      className="overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => {
                        setSelectedImage(image.beforeImage)
                        setSelectedImageAlt(`Before - ${image.title}`)
                      }}
                    >
                      <Image
                        src={image.beforeImage}
                        alt={`Before - ${image.title}`}
                        width={800}
                        height={600}
                        className="aspect-[4/3] w-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-lg font-semibold text-white">Before</p>
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative">
                    <div 
                      className="overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => {
                        setSelectedImage(image.afterImage)
                        setSelectedImageAlt(`After - ${image.title}`)
                      }}
                    >
                      <Image
                        src={image.afterImage}
                        alt={`After - ${image.title}`}
                        width={800}
                        height={600}
                        className="aspect-[4/3] w-full object-cover hover:scale-105 transition duration-300"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-lg font-semibold text-white">After</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="mt-8 text-lg font-semibold text-gray-900">{image.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{image.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/estimate"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ''}
        imageAlt={selectedImageAlt}
      />
    </div>
  )
} 