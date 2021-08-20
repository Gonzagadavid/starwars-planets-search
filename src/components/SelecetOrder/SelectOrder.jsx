import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Input from '../Input/Input';
import Select from '../Select/Select';

const SelectOrder = () => {
  const {
    filters: { order: { column, sort } }, data, setSort, sortList,
  } = useContext(StarWarsContext);

  const columns = data.length ? Object.keys(data[0])
    .filter((key) => key !== 'residents') : [];

  return (
    <div>
      <Select
        id="column-sort"
        labelText="Ordenar por"
        options={ columns }
        value={ column }
        onChange={
          ({ target: { value } }) => (
            setSort([sort, value]))
        }
      />
      <Input
        id="column-sort-input-asc"
        labelText="Ordem Ascedente"
        type="radio"
        value="ASC"
        onChange={ () => setSort(['ASC', column]) }
      />
      <Input
        id="column-sort-input-desc"
        labelText="Ordem Decrescente"
        type="radio"
        value="DESC"
        onChange={ () => setSort(['DESC', column]) }
      />
      <button
        type="button"
        onClick={ sortList }
        data-testid="column-sort-button"
      >
        Ordenar
      </button>
    </div>
  );
};

export default SelectOrder;
