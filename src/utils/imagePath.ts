const basePath = process.env.NODE_ENV === 'development' ? '' : '/patchwork'

export function getImagePath(path: string): string {
  // Ensure the path starts with a slash but doesn't have multiple slashes
  return path.replace(/^\/+/, '/')
} 