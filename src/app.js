import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  addExpense({ description: "Water Bill", amount: 300, createdAt: 0 })
);

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 600, createdAt: 5000000000 })
);

store.dispatch(
  addExpense({ description: "Rent", amount: 1095, createdAt: 2000 })
);

// setTimeout(() => {
//   store.dispatch(setTextFilter("Gas"));
// }, 3000);

// // store.dispatch(setTextFilter("bill"));

// store.dispatch(setTextFilter("water"));

console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
