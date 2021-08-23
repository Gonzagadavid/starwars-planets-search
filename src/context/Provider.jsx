import { node } from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { arraySort, filterIncludes, mapFilters } from '../functions';
import { useTwoValues, useArray } from '../hooks';
import fetchApi from '../services/fetchApi';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [original, setOriginal] = useState([]);
  const [name, setFilterByName] = useState('');
  const [sort, column, setSort] = useTwoValues(['ASC', 'name']);
  const [filterByNumericValues, addValues, removeValues] = useArray([]);
  // const original = useRef(data);

  const fetchPlanets = useCallback(async () => {
    const { results } = await fetchApi();
    const orderData = arraySort(results, sort, column);
    setData(orderData);
    setOriginal(orderData);
    // original = results;
  }, [column, setData, sort]);

  const filterNumber = useCallback(() => {
    setData(mapFilters(original, filterByNumericValues));
  }, [filterByNumericValues, original]);

  useEffect(() => { fetchPlanets(); }, [fetchPlanets]);

  useEffect(() => { filterNumber(); }, [filterNumber]);

  useEffect(() => { setData(filterIncludes(original, name, 'name')); },
    [original, name]);

  useEffect(() => { setData(arraySort(original, sort, column)); },
    [column, sort, original]);

  const filterByName = { name };
  const order = { column, sort };
  const filters = { filterByName, filterByNumericValues, order };
  const context = { data, filters, setFilterByName, setSort, addValues, removeValues };

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
