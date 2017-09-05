'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertParams = undefined;

var _baseConvertions = require('./baseConvertions');

var base = _interopRequireWildcard(_baseConvertions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var convertParams = exports.convertParams = function convertParams(input) {
  return Object.keys(input).reduce(function (obj, key) {
    obj[base.fromCamel(key)] = input[key];
    return obj;
  }, {});
}; // Project Assets