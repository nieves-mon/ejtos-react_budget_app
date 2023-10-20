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
    <select
      className="alert alert-success"
      onChange={(e) => changeCurrency(e.target.value)}
    >
      {currencies.map((currency, idx) => (
        <option value={idx}>
          {currency.symbol} {currency.label}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropDown;
