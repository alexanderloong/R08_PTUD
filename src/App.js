import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteCustomer from "./component/router/RouteCustomer";
import RouteStore from "./component/router/RouteStore";
import CartContextProvider from "./component/context/cartContext";
import RouteAdmin from "./component/router/RouteAdmin";
import RouteShipper from "./component/router/RouteShipper";

function App() {
  let statusUser = 1;
  return (
    <CartContextProvider>
      <BrowserRouter>
        {/* <RouteCustomer /> */}

        {/* <RouteStore /> */}
        {/* <RouteAdmin /> */}
        <RouteShipper />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
