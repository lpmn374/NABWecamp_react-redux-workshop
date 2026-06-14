import { useContext } from "react";
import { AppContext } from "../context/AppContext";
// interface ExpenseSummaryProps {
//   total: number
//   currencySymbol: string
// }

function ExpenseSummary() {
  // TODO: consume total and currencySymbol from context instead of props
  const context = useContext(AppContext);
  if (!context) return null;
  const { total, currencySymbol } = context;
  return (
    <div className="expense-summary">
      <span className="expense-summary-label">Total</span>
      <span className="expense-summary-amount">
        {currencySymbol}
        {total.toFixed(2)}
      </span>
    </div>
  );
}

export default ExpenseSummary;
