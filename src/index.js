/******* TO SNAKE *******/

export const fromCamel = (string) => (
  string.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`)
);

export const fromConstant = (string) => (
  string.toLowerCase()
);

export const fromPascal = (string) => (
  string.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`).substr(1)
);


/******* FROM SNAKE *******/

export const toCamel = (string) => (
  string.replace(/(_[a-z])/g, letter => `${letter[1].toUpperCase()}`)
);


/******* FINAL CONVERSION *******/

export const convertParams = (input) => (
  Object.keys(input).reduce((obj, key) => {
    obj[fromCamel(key)] = input[key]
    return obj
  }, {})
);
