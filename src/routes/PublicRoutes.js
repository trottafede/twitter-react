import React from "react";
import { Route } from "react-router-dom";

import Home from "../Home";
function PublicRoutes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={Home} />

      <Route exact path="/signIn" component={Home} />
      <Route exact path="/signUp" component={Home} />

      <Route exact path="/editProfile" component={Home} />

      <Route exact path="/follow" component={Home} />

      <Route exact path="/logout" component={Home} />
    </div>
  );
}

export default PublicRoutes;
