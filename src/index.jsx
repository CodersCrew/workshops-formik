import React from "react";
import ReactDOM from "react-dom";
import OrderForm from "./OrderForm";

import "bulma/css/bulma.css";

const App = () => (
  <div className="container">
    <div className="section">
      <h1 className="title">Formularz zamówienia</h1>
      <OrderForm />
    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
