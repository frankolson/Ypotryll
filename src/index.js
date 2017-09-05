/******* TO SNAKE *******/

export fromCamel = (string) => (
  string.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`)
);

export fromConstant = (string) => (
  string.toLowerCase().replace(/(_[a-z])/g, letter => `_${letter.toLowerCase()}`)
);

export fromPascal = (string) => (
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
