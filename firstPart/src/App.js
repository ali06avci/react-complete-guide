import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Computer",
    amount: 199.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 94.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 50,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "TV",
    amount: 104.32,
    date: new Date(2019, 7, 14),
  },
  {
    id: "e6",
    title: "Tablet",
    amount: 199.49,
    date: new Date(2019, 2, 12),
  },
  {
    id: "e7",
    title: "Pen",
    amount: 18.49,
    date: new Date(2020, 2, 12),
  },
  {
    id: "e8",
    title: "Soundbar",
    amount: 28.49,
    date: new Date(2020, 5, 20),
  },
  {
    id: "e9",
    title: "Pen",
    amount: 38.99,
    date: new Date(2020, 12, 12),
  },
  {
    id: "e10",
    title: "Shoes",
    amount: 48.69,
    date: new Date(2019, 2, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
