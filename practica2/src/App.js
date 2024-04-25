import React from 'react';
import Table from './components/Table';

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <h1>Tabla de ingresos netos</h1>
      <Table netIncomes={netIncomes} />
      <p>Promedio de ingreso neto por compañia: {averageIncome}</p>
    </div>
  );
};

export default App;
