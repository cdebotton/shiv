'use strict';

import invariant from './utils/invariant';

class DataMap {
  constructor() {
    this.map = {};
  }

  get(property) {
    invariant(
      typeof property === 'string',
      'DataMap.get(...) expects one string parameter, received `%s`.',
      typeof property
    );

    return this.map[property];
  }

  set(property, value) {
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
  }
}

export default DataMap;
