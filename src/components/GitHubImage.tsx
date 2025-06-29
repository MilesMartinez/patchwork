'use client'

import Image, { ImageProps } from 'next/image'

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function GitHubImage({ src, ...props }: GitHubImageProps) {
  // Ensure the path starts with a slash but doesn't have multiple slashes
  const cleanPath = src.replace(/^\/+/, '/')

  return <Image {...props} src={cleanPath} />
} 