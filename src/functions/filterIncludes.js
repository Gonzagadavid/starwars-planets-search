const filterIncludes = (array, string, attr) => (
  array.filter((item) => item[attr].includes(string))
);

export default filterIncludes;
