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

var toCamel = exports.toCamel = function toCamel(string) {
  return string.replace(/(_[a-z])/g, function (letter) {
    return letter[1].toUpperCase();
  });
};

var toConstant = exports.toConstant = function toConstant(string) {
  return string.toUpperCase();
};

var toPascal = exports.toPascal = function toPascal(string) {
  return string.replace(/(_[a-z])/g, function (letter) {
    return letter[1].toUpperCase();
  }).replace(/(^[a-z])/g, function (letter) {
    return letter.toUpperCase();
  });
};

/******* FINAL CONVERSION *******/

var convertParams = exports.convertParams = function convertParams(input) {
  return Object.keys(input).reduce(function (obj, key) {
    obj[fromCamel(key)] = input[key];
    return obj;
  }, {});
};