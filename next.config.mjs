/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/next-playground' : '';

const nextConfig = withExportImages({
  //
  output: 'export',
  basePath,
  assetPrefix: basePath,
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
    basePath,
  },
});

export default nextConfig;
