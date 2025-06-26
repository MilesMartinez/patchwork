import { Navigation } from '@/components/Navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Professional Installation',
    description: 'Expert drywall installation for both residential and commercial properties',
  },
  {
    name: 'Custom Texturing',
    description: 'Wide variety of texture options to match your existing walls or create a new look',
  },
  {
    name: 'Quality Repairs',
    description: 'Seamless repairs for holes, cracks, water damage, and other drywall issues',
  },
  {
    name: 'Finishing Excellence',
    description: 'Smooth, professional finishing that stands the test of time',
  },
]

const services = [
  {
    name: 'Residential Services',
    description: 'Complete drywall solutions for your home, from new construction to renovations',
    image: '/images/residential.jpg',
  },
  {
    name: 'Commercial Projects',
    description: 'Large-scale commercial drywall installation and maintenance services',
    image: '/images/commercial.jpg',
  },
]

export default async function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      
      {/* Hero section */}
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  San Antonio's Trusted
                  <span className="block text-gray-600">Drywall Specialists</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Professional drywall installation, repair, and finishing services with over 20 years of experience.
                  Serving San Antonio and surrounding areas.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/estimate"
                    className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                  >
                    Get Free Estimate
                  </Link>
                  <Link href="/galleries" className="text-sm font-semibold leading-6 text-gray-900">
                    View Our Work <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-[600px] lg:h-full">
            <Image
              src="images/hero.jpg"
              alt="Professional drywall work"
              fill
              className="aspect-[3/2] h-full w-full object-cover object-top lg:aspect-auto"
              style={{ objectPosition: '50% 20%' }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for perfect walls
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From new construction to repairs, we deliver exceptional results with attention to detail
            and commitment to quality.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-gray-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive drywall services for both residential and commercial projects.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={1000}
                  height={600}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="font-display text-2xl font-bold leading-8 tracking-tight text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your space?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Contact us today for a free estimate on your drywall project.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/estimate"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Free Estimate
            </Link>
            <a href="tel:210-545-6150" className="text-sm font-semibold leading-6 text-white">
              Call Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="mt-32 sm:mt-40"></div>
    </div>
  )
} 