// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function expressMiddleware(router) {
  router.use(
    "/media/",
    createProxyMiddleware({
      target: process.env.MEDIA_URL || "http://www.example.org",
      changeOrigin: true,
    }),
  );
};
