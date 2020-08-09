import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../views/home/Home";
import Register from "../views/register/Register";
import ListUsers from "../views/list/ListUsers";
import Edit from "../views/edit/Edit";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/user-badges/register" component={Register} />
        <Route exact path="/user-badges/edit/:id" component={Edit} />
        <Route exact path="/user-badges/list" component={ListUsers} />
        <Route exact path="/user-badges" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
