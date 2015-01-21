"use strict";

var _toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var React = _interopRequire(require("react"));

var shiv = _interopRequire(require("../.."));

let ReactRouter = shiv.get("react.router");

module.exports = function (server) {
  return new Promise(function (resolve, reject) {
    var _resolveRoute;
    let Router = createRouter(resolve, reject, server.req.url);

    (_resolveRoute = resolveRoute(Router, server)).then.apply(_resolveRoute, _toArray(function (args) {
      resolve.apply(undefined, _toArray(args));
    }));
  });
};

let createRouter = function (resolve, reject, url) {
  let Routes = shiv.get("client.routes");

  return ReactRouter.create({
    routes: Routes,
    location: url,
    onAbort: function (aborted) {
      let to = aborted.to;
      let params = aborted.params;
      let query = aborted.query;
      let url = ReactRouter.makePath(to, params, query);

      reject(url);
    }
  });
};

let resolveRoute = function (Router, server) {
  return new Promise(function (resolve, reject) {
    try {
      Router.run.apply(Router, _toArray(function (args) {
        resolve.apply(undefined, _toArray(args));
      }));
    } catch (err) {
      reject(err);
    }
  })["catch"](function (redirect) {
    server.redirect(redirect);
  });
};