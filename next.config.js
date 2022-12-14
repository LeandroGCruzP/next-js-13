/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'avatars.dicebear.com'
    ]
  }
}

module.exports = nextConfig
