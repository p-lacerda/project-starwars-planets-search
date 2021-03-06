import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import SelectInput from './SelectInput';

function Search() {
  const { setName, setFilters, setValue, setComparison, setColumn,
    filters, btnActive, setBtnActive,
    comparison, column, value, dropdownArray, setDropdown,
  } = useContext(PlanetsContext);

  const comparisonArray = ['maior que', 'menor que', 'igual a'];

  const onClick = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value },
      ],
    });
    const dropdownFiltered = dropdownArray.filter((arr) => arr !== column);
    setDropdown(dropdownFiltered);
  };

  useEffect(() => {
    setBtnActive(false);
  }, [btnActive]);

  return (
    <section>
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
    </section>
  );
}

export default Search;
