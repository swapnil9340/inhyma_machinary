/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  crossOrigin: 'anonymous',

  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap', // internally handled, no URL change
      },
    ];
  },
};

export default nextConfig;
