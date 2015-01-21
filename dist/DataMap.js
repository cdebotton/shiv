"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var invariant = _interopRequire(require("./utils/invariant"));

let DataMap = (function () {
  function DataMap() {
    this.map = {};
  }

  _prototypeProperties(DataMap, null, {
    get: {
      value: function get(property) {
        invariant(typeof property === "string", "DataMap.get(...) expects one string parameter, received `%s`.", typeof property);

        return this.map[property];
      },
      writable: true,
      enumerable: true,
      configurable: true
    },
    set: {
      value: function set(property, value) {
        invariant(typeof property === "string", "DataMap.get(...) expects the first parameter to be a string, received `%s`.", typeof property);

        invariant(typeof value !== "undefined", "DataMap.set(...) expects a second parameter of any type.");

        this.map[property] = value;

        return this;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return DataMap;
})();

module.exports = DataMap;