'use client'

import Image, { ImageProps } from 'next/image'

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function GitHubImage({ src, ...props }: GitHubImageProps) {
  // Remove leading slash if present
  const cleanPath = src.startsWith('/') ? src.slice(1) : src
  
  // Add patchwork prefix only if not in development
  const basePath = process.env.NODE_ENV === 'development' ? '' : 'patchwork'
  const imagePath = basePath ? `${basePath}/${cleanPath}` : cleanPath

  return <Image {...props} src={`/${imagePath}`} />
} 