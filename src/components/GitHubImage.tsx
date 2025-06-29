'use client'

import Image, { ImageProps } from 'next/image'

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function GitHubImage({ src, ...props }: GitHubImageProps) {
  // Always ensure path starts with a forward slash
  const cleanPath = src.startsWith('/') ? src : `/${src}`

  return <Image {...props} src={cleanPath} />
} 