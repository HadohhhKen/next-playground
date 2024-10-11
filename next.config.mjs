/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/next-playground' : '';

const nextConfig = {
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
};

export default nextConfig;
