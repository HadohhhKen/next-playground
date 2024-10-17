/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const relativePath = isProd ? '' : '';

const nextConfig = {
  output: 'export',
  basePath: relativePath,
  assetPrefix: relativePath,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**/*',
      },
    ],
  },
  env: {
    basePath: relativePath,
  },
};

export default nextConfig;
