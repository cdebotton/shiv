import isType from '../lib/isType';
import getType from '../lib/getType';

var validations = {
  required(prop, value) {
    if (! value) return `${prop} is required.`;
  },

  isString(prop, value) {
    if (! isType(value, 'string')) {
      return `${prop} must be a string, received a ${getType(value)}`;
    }
  }
};

export default class ValidationDict {
  constructor() {
    if (this.constructor === ValidationDict) {
      throw new Error(
        'ValidationDict is an abstract class and should ' +
        'not be instantiated...'
      );
    }
  }

  static extend(name, fn) {
    validations[name] = fn;
  }

  static toObject() {
    return Object.getOwnPropertyNames(validations)
      .reduce((memo, key) => {
        if (isType(memo[key], 'function')) {
          obj[key] = memo[key];
        }
      }, {});
  }
}
