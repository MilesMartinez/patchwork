/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repoName = 'patchwork'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '/',
}

module.exports = nextConfig 