import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "./../components/Header";
import AddExpensePage from "./../components/AddExpensePage";
import EditExpensePage from "./../components/EditExpensePage";
import ExpenseDashboardPage from "./../components/ExpenseDashboardPage";
import HelpPage from "./../components/HelpPage";
import NotFoundPage from "./../components/NotFoundPage";

// 6 new files for components
// setup imports component, defaul exports
// import into AppRouter

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />

      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
