import React, { useState } from "react";
//css
import "./Expenses.css";
//Card
import Card from "../Card/Card";
//expenseFilter
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../Chart/ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
