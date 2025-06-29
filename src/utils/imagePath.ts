const basePath = process.env.NODE_ENV === 'development' ? '' : '/patchwork'

export function getImagePath(path: string): string {
  // Always ensure path starts with a forward slash
  return path.startsWith('/') ? path : `/${path}`
} 