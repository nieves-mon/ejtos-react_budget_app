import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const ExpenseTotal = () => {
  const { expenses, currencies, currentCurrencyId } = useContext(AppContext);

  const currentCurrency = currencies[currentCurrencyId];

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>
        Spent so far: {currentCurrency.symbol}
        {totalExpenses}
      </span>
    </div>
  );
};
export default ExpenseTotal;
