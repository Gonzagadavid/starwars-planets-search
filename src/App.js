import React from 'react';
import Filter from './components/Filter/Filter';
import Table from './components/Table/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
