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
      {
        protocol: 'https',
        hostname: 'www.aceraceparts.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'clintonaluminum.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.steelpipesfactory.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.trupply.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pipedreamfittings.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.grainger.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn11.bigcommerce.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '5.imimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kencotubes.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hkimg.bjyyb.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.jigneshsteel.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.navstarsteel.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.metline-pipefittings.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.asiadsteels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'steeltubes.co.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dmmetals.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nerop-nero-gob2b.b-cdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.polyconn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rextonsteelalloys.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kkfittings.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.marcelpiping.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.champaksteel.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lakshyasteel.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dzyqewgrzyhxi.cloudfront.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hosewarehouse.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'petromatco.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.dynamicforgefittings.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bhawalsteelagency.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
