import getType from './getType';

export default function(obj, matcher) {
  return getType(obj).toLowerCase() === matcher.toLowerCase();
};
