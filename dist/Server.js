"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var prepareServer = _interopRequire(require("./utils/prepareServer"));

let SERVER_CONTAINER = Symbol("contains server instance");

let Server = function Server() {
  this[SERVER_CONTAINER] = prepareServer();
};