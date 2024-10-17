/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/next-playground' : '';

const createNextConfig = async () => {
  const nextConfig = await withExportImages({
    output: 'export',
    basePath,
    assetPrefix: basePath,
    trailingSlash: true,
    env: {
      basePath,
    },
  });
  return nextConfig;
};

export default createNextConfig();
