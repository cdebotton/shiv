"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var ValidationDict = _interopRequire(require("./ValidationDict"));

var Validator = function Validator() {};

Validator.validate = function (prop, value, validations) {
  var dict = ValidationDict.toObject();

  var errors = validations.reduce(function (memo, validation) {
    var error = dict[validation](prop, value);

    return error ? memo.push(error) : memo;
  }, []);

  return errors.length > 0 && errors;
};

module.exports = Validator;