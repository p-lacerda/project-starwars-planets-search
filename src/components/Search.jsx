import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { handleChange } = useContext(PlanetsContext);
  return (
    <form>
      <label htmlFor="filter">
        <input
          id="filter"
          placeholder="Filtrar por nome"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Search;
