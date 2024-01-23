function transformToCamelCase(param) {
  const modifiedString = param.replace(/-([a-z])/g, (match, group1) =>
    group1.toUpperCase()
  );
  return modifiedString;
}

export const sortData = (data, sortBy, sortOrder) => {
  const sortByCamelCase = transformToCamelCase(sortBy);

  const OrderedBooks = data.slice().sort((a, b) => {
    if (sortOrder === "asc") {
      return (
        parseInt(a.facts[sortByCamelCase]) - parseInt(b.facts[sortByCamelCase])
      );
    }
    if (sortOrder === "desc") {
      return (
        parseInt(b.facts[sortByCamelCase]) - parseInt(a.facts[sortByCamelCase])
      );
    }
  });
  return OrderedBooks;
};

export const filterData = (data, filterBy, value) => {
  const filterByCamelCase = transformToCamelCase(filterBy);
  if (value === "selecione") {
    return data;
  }
  return data.filter((book) => book.facts[filterByCamelCase] === value);
};

export const computeStats = (data) => {
  return data;
};
