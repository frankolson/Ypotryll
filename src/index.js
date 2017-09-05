/******* TO SNAKE *******/

export const fromCamel = (string) => (
  string.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`)
);

export const fromConstant = (string) => (
  string.toLowerCase().replace(/(_[a-z])/g, letter => `_${letter.toLowerCase()}`)
);

export const fromPascal = (string) => (
  string.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`).substr(1)
);


/******* FROM SNAKE *******/


/******* FINAL CONVERSION *******/

export const convertParams = (input) => (
  Object.keys(input).reduce((obj, key) => {
    obj[fromCamel(key)] = input[key]
    return obj
  }, {})
);
