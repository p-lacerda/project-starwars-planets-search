import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, loading, name,
    getData, column, comparison, value } = useContext(PlanetsContext);

  // React Dynamic Table
  // https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  const renderHeader = () => {
    const newData = Object.keys(data[0]);
    return newData
      .map((thead) => thead.replace('_', ' '))
      .filter((thead) => thead !== 'residents')
      .map((thead) => (
        <th key={ thead }>
          {thead}
        </th>));
  };

  useEffect(() => {
    getData();
  }, [name]);

  return (
    loading ? <h2> Loading... </h2> : (
      <div>
        <table>
          <thead>
            <tr>
              {renderHeader()}
            </tr>
          </thead>
          <tbody>
            {/* Transformar mais tarde em dinâmico */}
            {data
              .filter((planet) => planet.name.includes(name))
              .map((dataPlanet, index) => (
                <tr key={ index }>
                  <td data-testid="planet-name">{dataPlanet.name}</td>
                  <td>{dataPlanet.rotation_period}</td>
                  <td>{dataPlanet.orbital_period}</td>
                  <td>{dataPlanet.diameter}</td>
                  <td>{dataPlanet.climate}</td>
                  <td>{dataPlanet.gravity}</td>
                  <td>{dataPlanet.terrain}</td>
                  <td>{dataPlanet.surface_water}</td>
                  <td>{dataPlanet.population}</td>
                  <td>{dataPlanet.films}</td>
                  <td>{dataPlanet.created}</td>
                  <td>{dataPlanet.edited}</td>
                  <td>{dataPlanet.url}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    ));
}

export default Table;
