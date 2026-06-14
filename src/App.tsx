import { useState } from "react";
import type { Expense } from "./types/expense";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // TODO: add handleAddExpense and handleDeleteExpense
  const handleAddExpense = (newExpense: Expense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };
  const handleDeleteExpense = (id: string) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  };

  return (
    <div className="app-layout">
      <aside>
        <h1>Expense Manager</h1>
        <ExpenseForm onAddExpense={handleAddExpense} />
      </aside>
      <main>
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
      </main>
    </div>
  );
}

export default App;
