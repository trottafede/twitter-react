import React from "react";
import Home from "./Home";
import Tweet from "./Tweet";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tweet />
      <Footer />
    </div>
  );
}

export default App;
