'use strict';

var invariant = require('./utils/invariant');

function DataMap() {
  this.map = {};
}

DataMap.prototype.get = function(property) {
  invariant(
    typeof property === 'string',
    'DataMap.get(...) expects one string parameter, received `%s`.',
    typeof property
  );
};

DataMap.prototype.set = function(property, value) {
  invariant(
    typeof property === 'string',
    'DataMap.get(...) expects the first parameter to be a string, received `%s`.',
    typeof property
  );

  invariant(
    typeof value !== 'undefined',
    'DataMap.set(...) expects a second parameter of any type.'
  );

  this.map[property] = value;

  return this;
};

module.exports = DataMap;
