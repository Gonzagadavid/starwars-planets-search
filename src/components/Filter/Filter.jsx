import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Input from '../Input/Input';
import SelectNumber from '../SelectNumber/SelectNumber';

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
      <SelectNumber />
    </div>
  );
};

export default Filter;
