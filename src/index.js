import isType from 'isType';

export default class Shiv {
  constructor() {

  }

  static set(prop, value) {
    Validator.validate(value, ['required']);
  }
}
