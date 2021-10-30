import React, { useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(END_POINT);
    const response = await request.json();
    setData(response.results);
    setLoading(false);
  };

  return (
    <PlanetsContext.Provider value={ { getData, data, loading } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;
