import { node } from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { arrayFilter, arraySort, filterIncludes } from '../functions';
import { useTwoValues, useThreeValues } from '../hooks';
import fetchApi from '../services/fetchApi';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterName, setFilterByName] = useState('');
  const [sortOrder, columnSort, setSort] = useTwoValues(['ASC', 'name']);
  const [column, comparison, value, setSelect] = useThreeValues();
  const initialData = useRef(data);
  const filterData = useRef(data);
  const filterByNum = useRef([]);

  const fetchPlanets = useCallback(async () => {
    const { results } = await fetchApi();
    setData(arraySort(results, sortOrder, columnSort));
    filterData.current = results;
    initialData.current = results;
  }, [columnSort, setData, sortOrder]);

  const filterNumber = useCallback(() => {
    const newData = arrayFilter(filterData.current, comparison, column, value);
    filterByNum.current = [...filterByNum.current, { column, comparison, value }];
    setData(newData);
    filterData.current = newData;
  }, [column, comparison, value]);

  useEffect(() => { fetchPlanets(); }, [fetchPlanets]);

  useEffect(() => { filterNumber(); }, [filterNumber]);

  useEffect(() => { setData(filterIncludes(filterData.current, filterName, 'name')); },
    [filterData, filterName]);

  useEffect(() => { setData(arraySort(filterData.current, sortOrder, columnSort)); },
    [columnSort, sortOrder, filterData]);

  const resetFilters = () => {
    setData(initialData.current);
    setFilterByName('');
    filterByNum.current = [];
  };

  const filters = {
    filterByName: { name: filterName },
    filterByNumericValues: filterByNum.current,
    order: { column: columnSort, sort: sortOrder },
  };

  const context = {
    data, filters, setFilterByName, setSelect, resetFilters, setSort,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
