import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import { filterNotIncludes } from '../../functions';
import { useTwoValues } from '../../hooks';
import Input from '../Input/Input';
import Select from '../Select/Select';

const SelectOrder = () => {
  const { data, setSort } = useContext(StarWarsContext);

  const [sort, column, setItemSort] = useTwoValues(['ASC', 'name']);

  const columns = data.length ? filterNotIncludes(Object.keys(data[0]), 'residents') : [];

  return (
    <div>
      <Select
        id="column-sort"
        labelText="Ordenar por"
        options={ columns }
        value={ column }
        onChange={
          ({ target: { value } }) => (
            setItemSort([sort, value]))
        }
      />
      <Input
        id="column-sort-input-asc"
        labelText="Ordem Ascedente"
        type="radio"
        value="ASC"
        onChange={ () => setItemSort(['ASC', column]) }
      />
      <Input
        id="column-sort-input-desc"
        labelText="Ordem Decrescente"
        type="radio"
        value="DESC"
        onChange={ () => setItemSort(['DESC', column]) }
      />
      <button
        type="button"
        onClick={ () => setSort([sort, column]) }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
};

export default SelectOrder;
