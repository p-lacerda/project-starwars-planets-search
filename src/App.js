import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <Home />
      </PlanetsProvider>
    </main>
  );
}

export default App;
