import React from "react";
import Chart from "./Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 1 },
    { label: "Mar", value: 2 },
    { label: "Apr", value: 3 },
    { label: "May", value: 4 },
    { label: "Jun", value: 5 },
    { label: "Jly", value: 6 },
    { label: "Aug", value: 7 },
    { label: "Sept", value: 8 },
    { label: "Oct", value: 9 },
    { label: "Nov", value: 10 },
    { label: "Dec", value: 11 },
  ];
  return (
    <div>
      <Chart />
    </div>
  );
};

export default ExpensesChart;
