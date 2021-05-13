import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

import store from "./redux/tokenStore";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

const tokenStore = createStore(store);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={tokenStore}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
