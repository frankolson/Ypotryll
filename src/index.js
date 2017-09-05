// Project Assets
import * as base from './baseConvertions';

export const convertParams = (input) => (
  Object.keys(input).reduce((obj, key) => {
    obj[base.fromCamel(key)] = input[key]
    return obj
  }, {})
);
