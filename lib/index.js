const camelToSnake = (string) => (
  string.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`)
);

const convertParams = (input) => (
  Object.keys(input).reduce((obj, key) => {
    obj[camelToSnake(key)] = input[key]
    return obj
  }, {})
);
