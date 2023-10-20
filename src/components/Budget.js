import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currencies, currentCurrencyId } = useContext(AppContext);
  const currentCurrency = currencies[currentCurrencyId];

  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currentCurrency.symbol}
        {budget}
      </span>
    </div>
  );
};

export default Budget;
