/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/patchwork' : '';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
  env: {
    basePath: basePath, // Make basePath available to the app
  }
}

module.exports = nextConfig 