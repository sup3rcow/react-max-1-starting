import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // hook, init value se postavi samo prvi put kad se komponenta kreira

  const clickHandler = () => {
    setTitle("Updated"); // promjena se ne dogodi odmah
    console.log(title, "old value");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Click</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
