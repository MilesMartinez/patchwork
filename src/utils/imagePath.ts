export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In GitHub Pages environment, prepend the repo name
  if (process.env.GITHUB_ACTIONS) {
    return `/patchwork/${cleanPath}`
  }
  
  // In local environment, just return with leading slash
  return `/${cleanPath}`
} 