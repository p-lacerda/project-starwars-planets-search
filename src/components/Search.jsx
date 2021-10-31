import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import SelectInput from './SelectInput';

function Search() {
  const { setName, setFilters, filters } = useContext(PlanetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const dropdownArray = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonArray = ['maior que', 'menor que', 'igual a'];

  const onClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  return (
    <form>
      <label htmlFor="filter-top">
        <input
          id="filter-top"
          placeholder="Filtrar por nome"
          onChange={ (e) => setName(e.target.value) }
          data-testid="name-filter"
        />
      </label>
      <SelectInput
        htmlFor="dropdown"
        dataId="column-filter"
        arr={ dropdownArray }
        onChange={ (e) => setColumn(e.target.value) }
      />
      <SelectInput
        htmlFor="comparison"
        dataId="comparison-filter"
        arr={ comparisonArray }
        onChange={ (e) => setComparison(e.target.value) }
      />
      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setValue(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ onClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Search;
