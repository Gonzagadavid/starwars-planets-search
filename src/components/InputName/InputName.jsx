import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Input from '../Input/Input';

const InputName = () => {
  const {
    setFilterByName, filters: { filterByName: { name } }, resetFilters,
  } = useContext(StarWarsContext);
  return (
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
  );
};

export default InputName;
