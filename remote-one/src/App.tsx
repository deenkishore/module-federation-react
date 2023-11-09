import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";

const App = () => (
  <div className="container">
      <div>Name: remote-one</div>
   <div><Header/></div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
