import React from "react";

import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <Link to={"/edit/" + id}>
      <h2> Expense: {description}</h2>
    </Link>
    <p>
      Created At: {createdAt} - Amount: {amount}
    </p>
  </div>
);

export default ExpenseListItem;
