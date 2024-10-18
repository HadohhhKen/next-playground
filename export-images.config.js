/**
 * @type {import('next-export-optimize-images').Config}
 */
(
  async () => {
    const { basePath } = await import('./next.config.mjs');
    const config = {
      basePath,
    };

    module.exports = config;
  }
)();
