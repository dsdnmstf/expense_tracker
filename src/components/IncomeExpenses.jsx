import { globalContext } from "../context/GlobalState";
import { useContext } from "react";

const IncomeExpenses = () => {
  const { transactions } = useContext(globalContext);
   const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  const expence = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money-plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expence}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
