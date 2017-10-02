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

export const convertParams = (input, from='camel', to='snake') => {
  if (Array.isArray(input)) {
    return input.map(value => convertParams(value, from, to));
  } else {
    return Object.keys(input).reduce((obj, key) => {
      if (Array.isArray(input[key])) {
        obj[convert(key, from, to)] = input[key].map(value => convertParams(value, from, to));
      } else if (typeof input[key] === "object" && input[key] !== null) {
        obj[convert(key, from, to)] = convertParams(input[key], from, to);
      } else {
        obj[convert(key, from, to)] = input[key];
      }
      return obj;
    }, {})
  }
};
