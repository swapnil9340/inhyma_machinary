/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // <-- Add Cloudinary domain here
  },
  crossOrigin: 'anonymous',
};

export default nextConfig;
