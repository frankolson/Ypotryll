Ypotryll
=========

A package for converting between variable naming conventions.

## Installation

`npm install ypotryll`

## Usage

```javascript
var ypotryll = require('ypotryll');

var styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

console.log(JSON.stringify(styles, null, 2));
/*
 * {
 *   "fontFamily": "sans-serif",
 *   "textAlign": "center"
 * }
 */

console.log(JSON.stringify(ypotryll.convertParams(styles), null, 2));
/*
 * {
 *   "font_family": "sans-serif",
 *   "text_align": "center"
 * }
 */
```
