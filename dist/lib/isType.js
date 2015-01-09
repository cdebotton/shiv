"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var getType = _interopRequire(require("./getType"));

module.exports = function (obj, matcher) {
  return getType(obj).toLowerCase() === matcher.toLowerCase();
};