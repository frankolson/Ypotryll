'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertParams = exports.convert = undefined;

var _baseConvertions = require('./baseConvertions');

var base = _interopRequireWildcard(_baseConvertions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fromTypes = {
  'camel': base.fromCamel,
  'constant': base.fromConstant,
  'pascal': base.fromPascal,
  'snake': function snake(data) {
    return data;
  }
}; // Project Assets


var toTypes = {
  'camel': base.toCamel,
  'constant': base.toConstant,
  'pascal': base.toPascal,
  'snake': function snake(data) {
    return data;
  },
  'trim': base.toTrim
};

var convert = exports.convert = function convert(input, from, to) {
  return toTypes[to](fromTypes[from](input));
};

var convertParams = exports.convertParams = function convertParams(input) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'camel';
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'snake';
  return Object.keys(input).reduce(function (obj, key) {
    obj[convert(key, from, to)] = input[key];
    return obj;
  }, {});
};