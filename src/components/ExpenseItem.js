import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
const ExpenseItem = (props) => {
  const { dispatch, currencies, currentCurrencyId } = useContext(AppContext);

  const currentCurrency = currencies[currentCurrencyId];

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currentCurrency.symbol}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          size={30}
          onClick={() => increaseAllocation(props.name)}
          color="green"
          type="button"
        />
      </td>
      <td>
        <FaMinusCircle
          size={30}
          onClick={() => decreaseAllocation(props.name)}
          color="#BC131F"
          type="button"
        />
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};
export default ExpenseItem;
