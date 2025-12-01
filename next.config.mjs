/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lynsteel.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'lynsteel.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
