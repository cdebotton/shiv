"use strict";

var libs = {};

var Library = function Library() {};

Library.prototype.register = function (hook, fn) {
  var validations = arguments[2] === undefined ? [] : arguments[2];
  if (Object.keys(libs).indexOf(hook) > -1) {
    throw new ReferenceError("A library reference with hook " + hook + " has already been registered,\n        please select a different hook");
  }

  libs[hook] = { fn: fn, validations: validations };
};

module.exports = Library;