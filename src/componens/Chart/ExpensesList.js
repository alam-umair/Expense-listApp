import React from "react";
//css
import "./ExpensesList.css";
import ExpenseItem from "../ExpenseItem";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Data Found</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.item.map((e) => (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
