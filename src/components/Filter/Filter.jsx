import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Input from '../Input/Input';

const Filter = () => {
  const {
    setFilterByName, filters: { filterByName: { name } },
  } = useContext(StarWarsContext);
  return (
    <div>
      <Input
        id="name-filter"
        type="text"
        labelText="Name:"
        value={ name }
        onChange={ ({ target: { value } }) => setFilterByName(value) }
      />
    </div>
  );
};

export default Filter;
