import { Navigation } from '@/components/Navigation'
import Link from 'next/link'
import { galleries } from './data'
import { GitHubImage } from '@/components/GitHubImage'

export default function GalleriesPage() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Work Gallery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Browse through our portfolio of completed projects showcasing our expertise in drywall installation,
              texturing, and repairs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {galleries.map((gallery) => (
              <Link 
                key={gallery.id} 
                href={`/galleries/${gallery.slug}`}
                className="flex flex-col items-start group"
              >
                <article className="w-full">
                  <div className="relative w-full overflow-hidden rounded-2xl">
                    <GitHubImage
                      src={gallery.imageUrl}
                      alt={gallery.title}
                      width={1000}
                      height={600}
                      className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <h3 className="font-display text-2xl font-bold leading-8 tracking-tight text-gray-900 group-hover:text-gray-600">
                        {gallery.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-600">{gallery.description}</p>
                  </div>
                </article>
              </Link>
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
    </div>
  )
} 