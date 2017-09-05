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
  string.replace(/(_[a-z])/g, letter => letter[1].toUpperCase())
);

export const toConstant = (string) => (
  string.toUpperCase()
);

export const toPascal = (string) => (
  string
    .replace(/(_[a-z])/g, letter => letter[1].toUpperCase())
    .replace(/(^[a-z])/g, letter => letter.toUpperCase())
);

export const toTrim = (string) => (
  string.replace(/(_)/g, '')
);


/******* FINAL CONVERSION *******/

export const convertParams = (input) => (
  Object.keys(input).reduce((obj, key) => {
    obj[fromCamel(key)] = input[key]
    return obj
  }, {})
);
