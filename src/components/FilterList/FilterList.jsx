import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const FilterList = () => {
  const {
    filters: { filterByNumericValues }, removeValues,
  } = useContext(StarWarsContext);

  return (
    <ul>
      { filterByNumericValues.map(({ column, comparison, value }, index) => (
        <li key={ index } data-testid="filter">
          {`${column} ${comparison} ${value}`}
          <button onClick={ () => removeValues(index) } type="button">X</button>
        </li>
      ))}
    </ul>
  );
};

export default FilterList;
