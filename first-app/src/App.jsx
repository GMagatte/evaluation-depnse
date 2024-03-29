import "./App.css";
import React, { useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpenses from "./components/TotalExpenses";
import { initialState, reducer } from "./reducer/reducer";
import categories from "./components/Categories";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
  };

  return (
    <div className="App">
      <h1  className="font-semibold">Gestion des dépenses personnelles</h1>
      <ExpenseForm addExpense={addExpense} categories={categories} />
      <ExpenseList expenses={state.expenses} />
      <TotalExpenses expenses={state.expenses} categories={categories} />
    </div>
  );
};

export default App;
