import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState([]);

  // Referência de código ao site GeeksforGeeks
  // https://www.geeksforgeeks.org/how-to-use-handlechange-function-in-react-component/
  const handleChange = (event) => {
    setFilterText(event.target.value);
  };

  const getData = async () => {
    const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(END_POINT);
    const response = await request.json();
    const newResults = response.results;
    setData(newResults);
    setLoading(false);
  };

  useEffect(() => {

  });

  return (
    <PlanetsContext.Provider
      value={ { getData, handleChange, data, loading, filterText } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;
