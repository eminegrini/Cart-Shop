import React from "react";
import { Route, Redirect, Switch } from "react-router";

import App from "./component/App";
import Price from "./component/price"


// Examples
import Cart from "./component/cart";


const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/Cart" component={Cart} />
      <Route exact path="/price" component={Price}/>
      <Route exact path="/new" />
      <Redirect exact from="/" to="/cart" />
    </Switch>
  </App>
);

export default Routes;