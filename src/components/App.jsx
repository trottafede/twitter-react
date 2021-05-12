import React from "react";

import { Route } from "react-router-dom";
import "./App.css";

import SignUp from "./pages/SignUp";
import UserHome from "./pages/UserHome";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignIn} />

      <Route exact path="/home" component={Home} />

      <Route path="/user" component={UserHome} />

      <Route path="/signIn" component={SignIn} />
      <Route path="/signUp" component={SignUp} />

      {/* <Route path="/follow" component={SignUp} />
      <Route path="/logout" component={SignUp} /> */}
      {/* <Route path="/user" component={ } /> */}
      {/* <Route path="/editProfile" component={SignUp} /> */}
    </div>
  );
}

export default App;
