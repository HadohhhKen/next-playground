/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '/next-playground';

const nextConfig = withExportImages({
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    basePath,
  },
});
console.log('Next.js Configuration:', nextConfig);
export default nextConfig;
export { basePath };
