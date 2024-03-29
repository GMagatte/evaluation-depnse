import React from "react";

const TotalExpenses = ({ expenses }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <h2 className="mt-4">Total des dépenses : {totalExpenses} €</h2>
    </div>
  );
};

export default TotalExpenses;
