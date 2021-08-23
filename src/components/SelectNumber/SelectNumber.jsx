import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Select from '../Select/Select';
import useThreeValues from '../../hooks/useThreeValues';
import Input from '../Input/Input';
import { columns, comparisons } from '../../constants';

const SelectNumber = () => {
  const [column, comparison, value, setValues,
  ] = useThreeValues(['population', 'maior que', 0]);

  const { addValues, filters: { filterByNumericValues },
  } = useContext(StarWarsContext);

  const colFiltered = filterByNumericValues.map(({ column: col }) => col);
  const columnsFilter = columns.filter((col) => !colFiltered.includes(col));

  return (
    <div>
      <Select
        id="column-filter"
        labelText="Selecione a coluna"
        options={ columnsFilter }
        value={ column }
        onChange={
          ({ target: { value: newColumn } }) => setValues([newColumn, comparison, value])
        }
      />
      <Select
        id="comparison-filter"
        labelText="Selecione a comparação"
        options={ comparisons }
        value={ comparison }
        onChange={
          ({ target: { value: newComparison } }) => (
            setValues([column, newComparison, value]))
        }
      />
      <Input
        id="value-filter"
        labelText="Valor:"
        type="number"
        value={ value }
        onChange={
          ({ target: { value: newValue } }) => setValues([column, comparison, newValue])
        }
      />
      <button
        type="button"
        onClick={ () => addValues({ column, comparison, value }) }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
};

export default SelectNumber;
