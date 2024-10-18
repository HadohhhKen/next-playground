/**
 * @type {import('next-export-optimize-images').Config}
 */
//(
//async () => {
{
  //const { basePath } = await import('./next.config.mjs');
  const config = {
    basePath: '/next-playground',
  };
  console.log('🚀 ~ config:', config);

  module.exports = config;
}
//)();
