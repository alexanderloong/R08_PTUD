import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteCustomer from "./component/router/RouteCustomer";
import RouteStore from "./component/router/RouteStore";

function App() {
  let statusUser = 2;
  return (
    <BrowserRouter>
      {statusUser === 1 ? (
        <RouteCustomer />
      ) : statusUser === 2 ? (
        <RouteStore />
      ) : (
        ""
      )}
    </BrowserRouter>
  );
}

export default App;
