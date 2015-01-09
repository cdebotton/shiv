var {toString} = Object.prototype;

export default function(obj) {
  try {
    var [res, type] = toString.call(obj)
      .match(/^\[object\s(.+)\]$/i);

    return res.toLowerCase();
  }
  catch (err) {
    throw new ReferenceError(
      'Invalid obj provided to getType(...)'
    );
  }
}
