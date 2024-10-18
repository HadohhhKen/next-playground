/** @type {import('next').NextConfig} */
import withExportImages from 'next-export-optimize-images';

/**
 * There are multiple deployment patterns, and if deployment to a non-root path is necessary,
 * please specify the path as needed.
 * If you do not consider deployment other than the root, please comment out the following line.
 */
const nonRootDeployPath = '/next-playground';
const isRootDeploy = process.env.NODE_ENV === 'development' || process.env.VERCEL || process.env.NETLIFY;
const basePath = isRootDeploy ? '' : nonRootDeployPath || '';
/**
 * If defining basePath is necessary, the same value needs to be set in export-images.config.js (CommonJS),
 * so it is stored in an environment variable.
 */
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
