const basePath = process.env.NODE_ENV === 'development' ? '' : '/patchwork'

export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `/${cleanPath}`
} 