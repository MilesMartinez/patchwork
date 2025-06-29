const basePath = process.env.NODE_ENV === 'development' ? '' : '/patchwork'

export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production (GitHub Pages), add the patchwork prefix
  return process.env.NODE_ENV === 'production'
    ? `/patchwork/${cleanPath}`
    : `/${cleanPath}`
} 