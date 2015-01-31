"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var Shiv = _interopRequire(require(".."));

var path = _interopRequire(require("path"));

var koa = _interopRequire(require("koa"));

var bodyparser = _interopRequire(require("koa-bodyparser"));

var compress = _interopRequire(require("koa-compress"));

var favicon = _interopRequire(require("koa-favicon"));

var json = _interopRequire(require("koa-json"));

var mount = _interopRequire(require("koa-mount"));

var passport = _interopRequire(require("koa-passport"));

var session = _interopRequire(require("koa-session"));

var serveStatic = _interopRequire(require("koa-static"));

var KeyGrip = _interopRequire(require("keygrip"));

var requireDir = _interopRequire(require("require-dir"));

module.exports = function () {
  let app = koa();
  let keys = [Shiv.get("app.secretKey"), Shiv.get("app.secretToken")];
  let middleware = requireDir("../middleware");
  let routes = Shiv.get("api.routes");

  app.keys = new KeyGrip(keys, "sha256");
  app.use(middleware.responseTime());
  app.use(middleware.errorPropagation());
  app.use(json({ pretty: false }));
  app.use(compress());
  app.use(bodyparser());
  app.use(session(app));
  app.use(serverStatic(path.join(__dirname, "public")));

  Object.keys(routes).forEach(function (route) {
    let Route = routes[route];
    app.use(mount(route, Route.middleware()));
  });

  app.use(middleware.isomorphic());

  return app;
};