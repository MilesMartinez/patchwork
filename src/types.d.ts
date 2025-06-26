/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

export interface GalleryItem {
  id: number
  title: string
  description: string
  imageUrl: string
  slug: string
}

export interface GalleryImage {
  id: number
  title: string
  beforeImage: string
  afterImage: string
  description: string
}

export interface Gallery {
  id: number
  title: string
  description: string
  imageUrl: string
  slug: string
  images: GalleryImage[]
} 