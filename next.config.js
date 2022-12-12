/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    
  },

  images: {
    domains: ["api.new.year.portal.rtyva.ru"]
  }
}

module.exports = nextConfig
