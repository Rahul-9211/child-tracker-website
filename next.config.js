/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // Disable server-side features
  experimental: {
    appDir: true,
  },
  // Add trailing slashes for static export
  trailingSlash: true,
}

module.exports = nextConfig 