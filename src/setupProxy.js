const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/*", {
      target: "https://serene-ridge-26896.herokuapp.com"
    })
  );
};
