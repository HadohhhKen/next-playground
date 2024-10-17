/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/next-playground' : '';

const nextConfig = withExportImages({
  output: 'export',
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  env: {
    basePath,
  },
});
console.log('Next.js Configuration:', nextConfig);
export default nextConfig;
