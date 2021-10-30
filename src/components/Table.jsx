import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, loading } = useContext(PlanetsContext);

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
            {data.map((dataPlanet, index) => (
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
