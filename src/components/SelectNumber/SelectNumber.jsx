import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Select from '../Select/Select';
import useThreeValues from '../../hooks/useThreeValues';
import Input from '../Input/Input';

const SelectNumber = () => {
  const [
    column, comparison, value, setValues,
  ] = useThreeValues(['population', 'maior que', 0]);
  const { setSelect, filters: { filterByNumericValues } } = useContext(StarWarsContext);
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const colFiltered = filterByNumericValues.map(({ column: col }) => col);
  const columnsFilter = columns.filter((col) => !colFiltered.includes(col));
  const comparisons = ['maior que', 'menor que', 'igual a'];
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
        onClick={ () => setSelect([column, comparison, value]) }
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
};

export default SelectNumber;
