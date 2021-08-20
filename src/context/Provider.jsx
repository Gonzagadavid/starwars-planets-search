import { node } from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { arrayFilter, arraySort } from '../functions';
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
    setData(newData);
    filterByNum.current = [...filterByNum.current, { column, comparison, value }];
    filterData.current = newData;
  }, [column, comparison, value]);

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  useEffect(() => {
    const newData = filterData.current.filter(({ name }) => name.includes(filterName));
    setData(newData);
  }, [filterData, filterName]);

  useEffect(() => {
    filterNumber();
  }, [filterNumber]);

  const resetFilters = () => {
    setData(initialData.current);
    setFilterByName('');
    filterByNum.current = [];
  };

  const sortList = () => setData(arraySort([...data], sortOrder, columnSort));

  const filters = {
    filterByName: { name: filterName },
    filterByNumericValues: filterByNum.current,
    order: { column: columnSort, sort: sortOrder },
  };

  const context = {
    data, filters, setFilterByName, setSelect, resetFilters, setSort, sortList,
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
