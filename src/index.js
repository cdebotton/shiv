import isType from 'isType';

export default class Pruno {
  constructor() {

  }

  static set(prop, value) {
    Validator.validate(value, ['required']);
  }
}
