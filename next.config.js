/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/patchwork' : ''

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
}

module.exports = nextConfig 