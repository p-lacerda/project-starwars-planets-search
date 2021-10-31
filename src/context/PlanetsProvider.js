import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [name, setName] = useState('');
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  const getData = async () => {
    const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(END_POINT);
    const response = await request.json();
    const newResults = response.results;
    setData(newResults);
    setLoading(false);
  };

  // Referẽncia ao código de César Meira - T14A
  // https://github.com/tryber/sd-014-a-project-starwars-planets-search/blob/cesar-meira-project-starwars/src/context/SWProvider.js
  useEffect(() => {
    setFilters({ ...filters, filterByName: name });
  }, [name]);

  // const filterFunction = () => {
  //   .filter((planet) => planet.population.includes)

  // }

  const { column, comparison, value } = filters.filterByNumericValues;
  return (
    <PlanetsContext.Provider
      value={ { getData,
        setName,
        setFilters,
        data,
        loading,
        name,
        filters,
        column,
        comparison,
        value,
      } }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetsProvider;
