/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoPath = isProd ? '/next-playground' : '';

const nextConfig = {
  basePath: repoPath,
  assetPrefix: repoPath,
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
