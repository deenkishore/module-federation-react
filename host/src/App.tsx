import React from "react";
import ReactDOM from "react-dom";
import Header from "remote_one/Header";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div><Header/></div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
