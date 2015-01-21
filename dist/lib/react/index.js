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

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var React = _interopRequire(require("react"));

var invariant = _interopRequire(require("../../utils/invariant"));

var shiv = _interopRequire(require("../.."));

var fetchState = _interopRequire(require("./fetchState"));

var getHandler = _interopRequire(require("./getHandler"));

let ShivReact = function ShivReact() {
  invariant(Shiv.get("react.router").hasOwnProperty("run") === true, "You must supply an instance of ReactRouter to Shiv.set('react.router')");

  invariant(Shiv.get("react.routes") instanceof Shiv.get("react.router").Routes, "You must supply valid ReactRouter routes");

  return function* () {
    var _ref = yield getHandler(this);
    var _ref2 = _slicedToArray(_ref, 2);

    let Handler = _ref2[0];
    let state = _ref2[1];
    let routes = state.routes;
    let params = state.params;
    let query = state.query;
    let data = yield fetchData(routes, params, query);
    let markup = React.renderToString(React.createElement(Handler, {
      params: params,
      query: query }));

    this.body = "<!doctype html>" + markup;

    yield next;
  };
};

module.exports = ShivReact;