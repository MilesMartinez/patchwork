export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Check if we're on GitHub Pages by looking at the URL
  const isGitHubPages = typeof window !== 'undefined' && 
    (window.location.hostname === 'milesmartinez.github.io' || 
     window.location.pathname.startsWith('/patchwork'))
  
  // In GitHub Pages environment, prepend the repo name
  if (isGitHubPages) {
    return `/patchwork/${cleanPath}`
  }
  
  // In local environment, just return with leading slash
  return `/${cleanPath}`
} 