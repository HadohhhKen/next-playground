/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/next-playground' : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  env: {
    basePath,
  },
};

export default nextConfig;
