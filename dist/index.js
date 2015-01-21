"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var koa = _interopRequire(require("koa"));

var DataMap = _interopRequire(require("./DataMap"));

let Shiv = function Shiv() {
  Object.assign(Shiv.prototype, DataMap.prototype);
  DataMap.call(this);

  this.app = new koa();

  return this;
};

module.exports = new Shiv();