'use client'

import Image, { ImageProps } from 'next/image'

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function GitHubImage({ src, ...props }: GitHubImageProps) {
  // Remove leading slash if present
  const cleanPath = src.startsWith('/') ? src.slice(1) : src
  return <Image {...props} src={`/${cleanPath}`} />
} 