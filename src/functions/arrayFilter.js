const arrayFilter = (array, comparison, column, value) => {
  const newData = array
    .filter((obj) => {
      if (comparison === 'maior que') return +obj[column] > +value;
      if (comparison === 'menor que') return +obj[column] < +value;
      if (comparison === 'igual a') return +obj[column] === +value;
      return true;
    });
  return newData;
};

export default arrayFilter;
