'use client'

import Image, { ImageProps } from 'next/image'

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function GitHubImage({ src, ...props }: GitHubImageProps) {
  // Remove any leading slashes and don't add any prefix - Next.js will handle that
  const cleanPath = src.replace(/^\/+/, '')

  return <Image {...props} src={`/${cleanPath}`} />
} 