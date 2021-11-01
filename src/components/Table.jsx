import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, newData, loading, name } = useContext(PlanetsContext);

  // React Dynamic Table
  // https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
  const renderHeader = () => {
    const newHeaderData = Object.keys(data[0]);
    return newHeaderData
      .map((thead) => thead.replace('_', ' '))
      .filter((thead) => thead !== 'residents')
      .map((thead) => (
        <th key={ thead }>
          {thead}
        </th>));
  };

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
            {newData
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
