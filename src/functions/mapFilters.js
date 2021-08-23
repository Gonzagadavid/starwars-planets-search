import arrayFilter from './arrayFilter';

const mapFilters = (array, filters) => {
  let arrayFiltered = [...array];
  filters.forEach(({ comparison, column, value }) => {
    arrayFiltered = arrayFilter(arrayFiltered, comparison, column, value);
  });
  return arrayFiltered;
};

export default mapFilters;
