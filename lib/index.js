"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var camelToSnake = exports.camelToSnake = function camelToSnake(string) {
  return string.replace(/([A-Z])/g, function (letter) {
    return "_" + letter.toLowerCase();
  });
};

var convertParams = exports.convertParams = function convertParams(input) {
  return Object.keys(input).reduce(function (obj, key) {
    obj[camelToSnake(key)] = input[key];
    return obj;
  }, {});
};