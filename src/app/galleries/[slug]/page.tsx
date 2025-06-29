import { galleries } from '../data'
import { notFound } from 'next/navigation'
import { GalleryContent } from './GalleryContent'

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

  return <GalleryContent gallery={gallery} />
} 