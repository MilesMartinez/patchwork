'use client'

import Image, { ImageProps } from 'next/image'

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function GitHubImage({ src, ...props }: GitHubImageProps) {
  // Remove any leading slashes
  const cleanPath = src.startsWith('/') ? src.slice(1) : src

  // In production (GitHub Pages), add the patchwork prefix
  const imagePath = process.env.NODE_ENV === 'production' 
    ? `/patchwork/${cleanPath}`
    : `/${cleanPath}`

  return <Image {...props} src={imagePath} />
} 