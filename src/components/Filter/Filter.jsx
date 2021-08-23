import React from 'react';
import FilterList from '../FilterList/FilterList';
import InputName from '../InputName/InputName';
import SelectOrder from '../SelecetOrder/SelectOrder';
import SelectNumber from '../SelectNumber/SelectNumber';

const Filter = () => (
  <div>
    <InputName />
    <SelectNumber />
    <FilterList />
    <SelectOrder />
  </div>
);

export default Filter;
