/**
 * @type {import('next-export-optimize-images').Config}
 */
(
  async () => {
    const { basePath } = await import('./next.config.mjs');
    const config = {
      basePath,
    };
    console.log('🚀 ~ config:', config);

    module.exports = config;
  }
)();
