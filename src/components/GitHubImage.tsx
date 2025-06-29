'use client'

import Image, { ImageProps } from 'next/image'

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function GitHubImage({ src, ...props }: GitHubImageProps) {
  // Remove any leading slashes and ensure a leading slash
  const cleanPath = src.startsWith('/') ? src : `/${src}`

  return <Image {...props} src={cleanPath} />
} 