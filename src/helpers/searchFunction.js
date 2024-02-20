export const searchByName = (arrey, query) => {
  return arrey.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const searchByNumber = (arrey, query) => {
  return arrey.filter(product => product.number.includes(query));
};

const isNumber = value => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export const search = (arrey, query) => {
  return isNumber(query)
    ? searchByNumber(arrey, query)
    : searchByName(arrey, query);
};
