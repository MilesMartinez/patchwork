/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/patchwork' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/patchwork/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 