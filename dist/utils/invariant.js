"use strict";

/**
 * invariant -- Throw error unless assertion passes.
 * @param  {bool} Assertion that must be met.
 * @param  {string} Message to throw if assertion fails.
 * @param  {...any} Parameters to pass for string interpolation of message.
 * @return {void}
 */

let invariant = function (assertion, message) {
  if (assertion !== true) {
    var args = [].slice.call(arguments);
    var params = args.slice(2);

    throw new Error(message.replace(/%s/g, function (str) {
      return params.shift();
    }));
  }
};

module.exports = invariant;