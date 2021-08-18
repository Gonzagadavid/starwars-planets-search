import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Input from '../Input/Input';
import SelectOrder from '../SelecetOrder/SelectOrder';
import SelectNumber from '../SelectNumber/SelectNumber';

const Filter = () => {
  const {
    setFilterByName, filters: { filterByName: { name } }, resetFilters,
  } = useContext(StarWarsContext);
  return (
    <div>
      <div data-testid="filter">
        <Input
          id="name-filter"
          type="text"
          labelText="Name:"
          value={ name }
          onChange={ ({ target: { value } }) => setFilterByName(value) }
        />
        <button type="button" onClick={ resetFilters }>X</button>
      </div>
      <SelectNumber />
      <SelectOrder />
    </div>
  );
};

export default Filter;
