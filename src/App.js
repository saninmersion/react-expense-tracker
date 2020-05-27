import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Budget } from "./components/Budget";
import { IncomeExpense } from "./components/IncomeExpense";
import { ExpenseList } from "./components/ExpenseList";
import { AddExpenseForm } from "./components/AddExpenseForm";
import { GlobalContext, GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider value={{ transactions: GlobalContext.transactions }}>
      <Header />
      <div className="container">
        <Budget />
        <IncomeExpense />
        <ExpenseList />
        <AddExpenseForm />
      </div>
    </GlobalProvider>
  );
}

export default App;
