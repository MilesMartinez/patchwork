'use client'

import { Navigation } from '@/components/Navigation'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const projectTypes = [
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
]

export default function EstimatePage() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Your Free Estimate
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll contact you within 24-48 hours with a detailed estimate for your project.
          </p>
        </div>
        {/* TODO: replace submit email */}
        <form action="https://formsubmit.co/31b6a79b9ec68ce1029c457002cf0075" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          {/* Honeypot to prevent spam */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          {/* Disable captcha */}
          <input type="hidden" name="_captcha" value="false" />
          {/* Success page */}
          <input type="hidden" name="_next" value="https://milesmartinez.github.io/patchwork/estimate/thank-you" /> {/* TODO: replace domain */}

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                Project Address
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="address"
                  id="address"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="projectType" className="block text-sm font-semibold leading-6 text-gray-900">
                Project Type
              </label>
              <div className="mt-2.5">
                <select
                  id="projectType"
                  name="projectType"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                >
                  {projectTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-semibold leading-6 text-gray-900">
                Project Description
              </label>
              <div className="mt-2.5">
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  placeholder="Please describe your project (e.g., room dimensions, type of work needed, timeline)"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Get Free Estimate
            </button>
          </div>
        </form>

        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900">
              Why Choose Patchwork?
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900">Expert Service</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Over 20 years of experience in residential and commercial drywall installation and repair.
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900">Quality Work</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Professional finish, attention to detail, and commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 