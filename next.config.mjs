/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
const isDev = process.env.NODE_ENV === 'development';
const basePath = isDev ? '' : '/next-playground';
process.env.BASE_PATH = basePath;

const nextConfig = withExportImages({
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    basePath,
  },
});

export default nextConfig;
