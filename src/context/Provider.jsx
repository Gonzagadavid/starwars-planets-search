import { node } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import fetchApi from '../services/fetchApi';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterName, setFilterByName] = useState('');
  const filterData = useRef(data);

  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await fetchApi();
      setData(results);
      filterData.current = results;
    };
    fetchPlanets();
  }, [setData]);

  useEffect(() => {
    const newData = filterData.current.filter(({ name }) => name.includes(filterName));
    setData(newData);
  }, [filterData, filterName]);

  return (
    <StarWarsContext.Provider
      value={ { data, filters: { filterByName: { name: filterName } }, setFilterByName } }
    >
      { children }
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
