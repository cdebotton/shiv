import requireDir from 'require-dir';

const dirs = requireDir('./library');
var libs = Object.keys(dirs)
  .reduce((memo, libName, index, arr) => {

  }, {});

export default class Library {
  register(hook, fn, validations = []) {
    if (Object.keys(libs).indexOf(hook) > -1) {
      throw new ReferenceError(
        `A library reference with hook ${hook} has already been registered,
        please select a different hook`
      );
    }

    libs[hook] = {fn, validations};
  }
};
