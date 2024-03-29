import React, { useReducer } from "react";
import categories from "./Categories";
import { initialState, reducer } from "../reducer/reducer/";

const ExpenseList = ({ expenses }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalByCategory = {};
  categories.forEach((category) => {
    const categoryExpenses = expenses.filter(
      (expense) => expense.category === category
    );
    totalByCategory[category] = categoryExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
  });

  const handleFilterChange = (e) => {
    const selectedCategory = e.target.value;
    dispatch({ type: "SET_SELECTED_CATEGORY", payload: selectedCategory });
    const categoryExpenses = expenses.filter(
      (expense) =>
        selectedCategory === "Toutes" || expense.category === selectedCategory
    );
    const totalForSelectedCategory = categoryExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
    dispatch({
      type: "SET_TOTAL_FOR_SELECTED_CATEGORY",
      payload: totalForSelectedCategory,
    });
  };

  return (
    <div>
      <h2 className="font-semibold text-3xl">Dépenses</h2>
      <label htmlFor="categoryFilter" className="mr-2 font-light">Filtrer par catégorie :</label>
      <select
        id="categoryFilter"
        value={state.selectedCategory}
        onChange={handleFilterChange}
        className="m-2 cursor-pointer px-1 py-1 rounded-md"
      >
        <option value="Toutes" className="font-thin">Toutes</option>

        {categories.map((category) => (
          <option key={category} value={category} className="font-thin ">
            {category}
          </option>
        ))}
      </select>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-center ">
            <strong>{expense.title}</strong> - Montant : {expense.amount} € -
            Catégorie : {expense.category}
          </li>
        ))}
      </ul>

      {state.selectedCategory !== "Toutes" && (
        <div>
          <h3 className="font-thin mt-3">Total pour la catégorie sélectionnée :</h3>
          <p>{state.totalForSelectedCategory} €</p>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
