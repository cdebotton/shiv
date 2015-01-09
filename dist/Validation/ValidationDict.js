"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var isType = _interopRequire(require("../lib/isType"));

var getType = _interopRequire(require("../lib/getType"));

var validations = {
  required: function required(prop, value) {
    if (!value) return "" + prop + " is required.";
  },

  isString: function isString(prop, value) {
    if (!isType(value, "string")) {
      return "" + prop + " must be a string, received a " + getType(value);
    }
  }
};

var ValidationDict = function ValidationDict() {
  if (this.constructor === ValidationDict) {
    throw new Error("" + this.displayName + " is an abstract class and should " + "not be instantiated...");
  }
};

ValidationDict.extend = function (name, fn) {
  validations[name] = fn;
};

ValidationDict.toObject = function () {
  return Object.getOwnPropertyNames(validations).reduce(function (memo, key) {
    if (isType(memo[key], "function")) {
      obj[key] = memo[key];
    }
  }, {});
};

module.exports = ValidationDict;