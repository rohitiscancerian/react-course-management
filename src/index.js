import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

function Hi() {
  return <p>Hi.</p>;
}

render(
  <Router>
    <Hi />
  </Router>,
  document.getElementById("app")
);
