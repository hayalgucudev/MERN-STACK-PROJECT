// craco.config.js

module.exports = {
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Custom middleware setup can go here

      // Example: Adding a custom middleware
      devServer.app.use((req, res, next) => {
        console.log(`Request URL: ${req.url}`);
        next();
      });

      // Return the updated middlewares
      return middlewares;
    },
  },
};