/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images: {
    domains: ["raw.githubusercontent.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
