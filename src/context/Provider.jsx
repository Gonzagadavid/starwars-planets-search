import { node } from 'prop-types';
import React, { useEffect, useState } from 'react';
import fetchApi from '../services/fetchApi';
import StarWarsContext from './StarWarsContext';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const { results } = await fetchApi();
      setData(results);
    };
    fetchPlanets();
  }, [setData]);

  return (
    <StarWarsContext.Provider value={ { data } }>
      { children }
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
