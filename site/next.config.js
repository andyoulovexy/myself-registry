/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Ai-Desk Technologies',
    description: 'The official store for Ai-Desk workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://andyoulovexy.github.io/myself-registry/',
    contactUrl: 'https://github.com/andyoulovexy/myself-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/myself-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
