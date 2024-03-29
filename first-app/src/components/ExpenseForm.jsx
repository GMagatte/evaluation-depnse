import React, { useState } from "react";

const ExpenseForm = ({ addExpense, categories }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    addExpense({ title, amount: parseFloat(amount), category });
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 mb-4">
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="m-2  w-40 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 "
      />
      <input
        type="number"
        placeholder="Montant"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="m-2  w-40 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="m-2 cursor-pointer px-1.5 py-1.5 rounded-md"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="btn m-2 px-1.5 py-1.5 bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-md "
      >
        Ajout Dépense
      </button>
    </form>
  );
};

export default ExpenseForm;
