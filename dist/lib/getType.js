"use strict";

var _slicedToArray = function (arr, i) {
  if (Array.isArray(arr)) {
    return arr;
  } else {
    var _arr = [];

    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);

      if (i && _arr.length === i) break;
    }

    return _arr;
  }
};

var toString = Object.prototype.toString;
module.exports = function (obj) {
  try {
    var _toString$call$match = toString.call(obj).match(/^\[object\s(.+)\]$/i);

    var _toString$call$match2 = _slicedToArray(_toString$call$match, 2);

    var res = _toString$call$match2[0];
    var type = _toString$call$match2[1];


    return res.toLowerCase();
  } catch (err) {
    throw new ReferenceError("Invalid obj provided to getType(...)");
  }
};