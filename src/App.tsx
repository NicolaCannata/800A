import React, { useState } from "react";
import { Home } from "./components/home";
import { List } from "./components/list";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <List />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
