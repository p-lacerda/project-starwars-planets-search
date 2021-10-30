import React, { useEffect, useContext } from 'react';
import Search from '../components/Search';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

function Home() {
  const { getData } = useContext(PlanetsContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h1>Projeto Star Wars - Trybe</h1>
      <Search />
      <Table />
    </main>
  );
}

export default Home;
