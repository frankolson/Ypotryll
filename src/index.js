/******* TO SNAKE *******/

export fromCamel = (string) => (
  string.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`)
);


/******* FROM SNAKE *******/


/******* FINAL CONVERSION *******/

export const convertParams = (input) => (
  Object.keys(input).reduce((obj, key) => {
    obj[fromCamel(key)] = input[key]
    return obj
  }, {})
);
