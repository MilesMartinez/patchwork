'use client'

import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Full-screen container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative max-h-[90vh] max-w-[90vw]">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-gray-900 shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900"
          >
            <XMarkIcon className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>

          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1920}
              height={1080}
              className="h-auto w-full"
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
} 