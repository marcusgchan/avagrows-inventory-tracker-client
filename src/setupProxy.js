const { createProxyMiddleware } = require("http-proxy-middleware");

// Workaround for CRA proxy bug
// https://github.com/facebook/create-react-app/issues/11762
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );
};
