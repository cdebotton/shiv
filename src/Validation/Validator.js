import ValidationDict from './ValidationDict';

export default class Validator {
  static validate(prop, value, validations) {
    var dict = ValidationDict.toObject();

    var errors = validations.reduce((memo, validation) => {
      var error = dict[validation](prop, value);

      return error ? memo.push(error) : memo;
    }, []);

    return errors.length > 0 && errors;
  }
}
