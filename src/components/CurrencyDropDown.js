import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyDropDown = () => {
  const { currencies, dispatch } = useContext(AppContext);

  const changeCurrency = (currentCurrencyId) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: currentCurrencyId,
    });
  };

  return (
    <div className="alert alert-success">
      <select
        className="bg-transparent border-0 input-group"
        onChange={(e) => changeCurrency(e.target.value)}
      >
        {currencies.map((currency, idx) => (
          <option value={idx} className="alert-success alert">
            {currency.symbol} {currency.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropDown;
