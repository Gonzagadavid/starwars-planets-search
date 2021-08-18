import React from 'react';
import Table from './components/Table/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
