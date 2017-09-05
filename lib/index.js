"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/******* TO SNAKE *******/

var fromCamel = exports.fromCamel = function fromCamel(string) {
  return string.replace(/([A-Z])/g, function (letter) {
    return "_" + letter.toLowerCase();
  });
};

var fromConstant = exports.fromConstant = function fromConstant(string) {
  return string.toLowerCase();
};

var fromPascal = exports.fromPascal = function fromPascal(string) {
  return string.replace(/([A-Z])/g, function (letter) {
    return "_" + letter.toLowerCase();
  }).substr(1);
};

/******* FROM SNAKE *******/

/******* FINAL CONVERSION *******/

var convertParams = exports.convertParams = function convertParams(input) {
  return Object.keys(input).reduce(function (obj, key) {
    obj[fromCamel(key)] = input[key];
    return obj;
  }, {});
};