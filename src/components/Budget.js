import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Budget = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, cur) => (acc += cur), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
