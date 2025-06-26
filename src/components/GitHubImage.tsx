'use client'

import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

interface GitHubImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export function GitHubImage({ src, ...props }: GitHubImageProps) {
  const [imagePath, setImagePath] = useState(src)

  useEffect(() => {
    // Check if we're on GitHub Pages
    const isGitHubPages = window.location.hostname === 'milesmartinez.github.io' || 
                         window.location.pathname.startsWith('/patchwork')
    
    if (isGitHubPages) {
      // Remove leading slash if present
      const cleanPath = src.startsWith('/') ? src.slice(1) : src
      setImagePath(`/patchwork/${cleanPath}`)
    }
  }, [src])

  return <Image {...props} src={imagePath} />
} 