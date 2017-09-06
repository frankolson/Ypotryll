# Ypotryll

[![npm version](https://img.shields.io/npm/v/ypotryll.svg?style=flat)](https://www.npmjs.com/package/ypotryll)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/frankolson/Ypotryll/blob/master/CONTRIBUTING.md#how-to-contribute)

A package for converting between variable naming conventions.

This package is especially helpful when you are using a web app stack with both Ruby and Javascript. With Javascript using camel case as its variable naming convention, and Ruby using snake case, it is useful to have a tool to translate between the two.

## Installation

`npm install ypotryll`

## Examples

### `convert(string, from, to)`

This is used to translate a string from one case to another.

- `string`: the string to be converted
- `from`: A string stating the type converting from
  - available options: `camel`, `constant`, `pascal`, `snake`
- `to`: A string stating the type converting to
  - available options: `camel`, `constant`, `pascal`, `snake`, `trim`

```javascript
var ypotryll = require('ypotryll');

var camelText = 'lookSomeCamelText';

var pascalText = ypotryll.convert(camelText, 'camel', 'pascal');
/*
 * LookSomeCamelText
 */
```

### `convertParams(object, from, to)`

This is used to translate a objects keys from one case to another. An appropriate place to use this before sending a JSON object to a Ruby on Rails API endpoint.

- `object`: the object whose keys are to be converted
- `from`: A string stating the type converting from
  - available options: `camel`, `constant`, `pascal`, `snake`
  - default: `camel`
- `to`: A string stating the type converting to
  - available options: `camel`, `constant`, `pascal`, `snake`, `trim`
  - default: `snake`

```javascript
var ypotryll = require('ypotryll');

var styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

var snakeParams = ypotryll.convertParams(styles);
/*
 * {
 *   font_family: "sans-serif",
 *   text_align: "center"
 * }
 */
```

## Contribute

Want to contribute? Awesome! Check out our [contributing file](https://github.com/frankolson/Ypotryll/blob/master/CONTRIBUTING.md).

## License

[MIT Licensed](https://github.com/frankolson/Ypotryll/blob/master/LICENSE.md). Copyright (c) Will Olson 2017.
