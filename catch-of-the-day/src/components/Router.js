import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Switch is gonna search for the exact path, if is not
// will search for the next one, and one and one, until
// fall for the Not Found page

import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
