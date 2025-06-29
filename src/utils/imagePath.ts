const basePath = process.env.NODE_ENV === 'development' ? '' : '/patchwork'

export function getImagePath(path: string): string {
  // Remove leading slash if present and ensure a leading slash
  return path.startsWith('/') ? path : `/${path}`
} 