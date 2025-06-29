'use client'

import { Navigation } from '@/components/Navigation'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function ThankYouPage() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Thank You!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've received your estimate request and will get back to you within 24-48 hours for further details.
          </p>
          <div className="mt-10">
            <a
              href={`${process.env.basePath || ''}/`}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 