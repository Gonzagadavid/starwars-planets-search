import { node } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import useThreeValues from '../hooks/useThreeValues';
import fetchApi from '../services/fetchApi';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterName, setFilterByName] = useState('');
  const [columnSort, setcolumnSort] = useState('name');
  const [sortOrder, setSort] = useState('');
  const [column, comparison, value, setSelect] = useThreeValues();
  const initialData = useRef(data);
  const filterData = useRef(data);
  const filterByNumericValues = useRef([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await fetchApi();
      const min = -1;
      results.sort((a, b) => (a.name > b.name ? 1 : min));
      setData(results);
      filterData.current = results;
      initialData.current = results;
    };
    fetchPlanets();
  }, [setData]);

  useEffect(() => {
    const newData = filterData.current.filter(({ name }) => name.includes(filterName));
    setData(newData);
  }, [filterData, filterName]);

  useEffect(() => {
    const newData = filterData.current
      .filter((obj) => {
        if (comparison === 'maior que') return +obj[column] > +value;
        if (comparison === 'menor que') return +obj[column] < +value;
        if (comparison === 'igual a') return +obj[column] === +value;
        return true;
      });
    setData(newData);

    filterByNumericValues.current = [
      ...filterByNumericValues.current, { column, comparison, value },
    ];

    filterData.current = newData;
  }, [column, comparison, value]);

  const resetFilters = () => {
    setData(initialData.current);
    setFilterByName('');
    filterByNumericValues.current = [];
  };

  const sortList = () => {
    const orderList = [...data]
      .sort((a, b) => (
        sortOrder === 'ASC'
          ? a[columnSort] - b[columnSort] : b[columnSort] - a[columnSort]));
    setData(orderList);
  };

  const context = {
    data,
    filters: {
      filterByName: { name: filterName },
      filterByNumericValues: filterByNumericValues.current,
      order: {
        column: columnSort,
        sort: sortOrder,
      },
    },
    setFilterByName,
    setSelect,
    resetFilters,
    setcolumnSort,
    setSort,
    sortList,
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
