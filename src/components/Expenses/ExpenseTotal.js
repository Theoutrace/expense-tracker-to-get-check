import React from "react";


import ExpenseItem from "./ExpenseItem";
import "./ExpenseTotal.css";

const ExpenseTotal = (props) => {

  return (
    <div>
      <div className="app-expense-all-item-container">
        {props.items.map((itm) => (
          <ExpenseItem
            title={itm.title}
            amount={itm.amount}
            date={itm.date}
            LocationOfExpenditure={itm.LocationOfExpenditure}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseTotal;
