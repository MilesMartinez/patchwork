import { Navigation } from '@/components/Navigation'
import { galleries } from '../data'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GitHubImage } from '@/components/GitHubImage'

export function generateStaticParams() {
  return [
    { slug: 'hole-repairs' },
    { slug: 'finishing' },
    { slug: 'carpentry' },
    { slug: 'texture-work' }
  ]
}

export default function GalleryPage({ params }: { params: { slug: string } }) {
  const gallery = galleries.find((g) => g.slug === params.slug)

  if (!gallery) {
    notFound()
  }

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

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="space-y-20">
              {gallery.images.map((image) => (
                <div key={image.id} className="relative">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Before Image */}
                    <div className="relative">
                      <div className="overflow-hidden rounded-lg">
                        <GitHubImage
                          src={image.beforeImage}
                          alt={`Before - ${image.title}`}
                          width={800}
                          height={600}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <p className="text-lg font-semibold text-white">Before</p>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative">
                      <div className="overflow-hidden rounded-lg">
                        <GitHubImage
                          src={image.afterImage}
                          alt={`After - ${image.title}`}
                          width={800}
                          height={600}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <p className="text-lg font-semibold text-white">After</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
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