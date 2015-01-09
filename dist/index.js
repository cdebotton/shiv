"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var isType = _interopRequire(require("isType"));

var Shiv = function Shiv() {};

Shiv.set = function (prop, value) {
  Validator.validate(value, ["required"]);
};

module.exports = Shiv;