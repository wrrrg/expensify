import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => (
  <header>
    <h1>Expensify</h1>
    {/* <Link to="/"> Home </Link>
        <Link to="/create"> Add Expenses </Link>
        <Link to="/edit"> Edit Expenses </Link>
        <Link to="/help"> Help </Link>
         */}

    <NavLink exact={true} to="/" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add Expenses
    </NavLink>

    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

export default Header;
