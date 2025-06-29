const basePath = process.env.NODE_ENV === 'development' ? '' : '/patchwork'

export function getImagePath(path: string): string {
  // Remove any leading slashes and don't add any prefix - Next.js will handle that
  const cleanPath = path.replace(/^\/+/, '')
  return `/${cleanPath}`
} 