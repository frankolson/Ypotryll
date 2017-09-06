// Project Assets
import * as base from './baseConvertions';

const fromTypes = {
  'camel': base.fromCamel,
  'constant': base.fromConstant,
  'pascal': base.fromPascal,
  'snake': data => data,
};

const toTypes = {
  'camel': base.toCamel,
  'constant': base.toConstant,
  'pascal': base.toPascal,
  'snake': data => data,
  'trim': base.toTrim,
};

export const convert = (input, from, to) => (
  toTypes[to](fromTypes[from](input))
);

export const convertParams = (input, from='camel', to='snake') => (
  Object.keys(input).reduce((obj, key) => {
    obj[convert(key, from, to)] = input[key]
    return obj
  }, {})
);
