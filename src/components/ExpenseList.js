import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export const ExpenseList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.length &&
          transactions.map((transaction) => (
            <Transaction transaction={transaction} key={Transaction.id} />
          ))}
      </ul>
    </>
  );
};
