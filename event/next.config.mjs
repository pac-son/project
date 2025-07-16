/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com',
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

export default nextConfig;
