import "./App.css";
import React, { useContext } from "react";

import { BrowserRouter } from "react-router-dom";

import RouteCustomer from "./component/router/RouteCustomer";
import RouteStore from "./component/router/RouteStore";

import RouteAdmin from "./component/router/RouteAdmin";
import RouteShipper from "./component/router/RouteShipper";

import { cartContext } from "./component/context/cartContext";

function App() {
  // Context
  const { stateCart } = useContext(cartContext);
  const { typeUser } = stateCart;

  let renderType;

  if (typeUser === 0) renderType = <RouteCustomer />;
  else if (typeUser === 1) renderType = <RouteStore />;

  // Render
  return <BrowserRouter>{renderType}</BrowserRouter>;
}

export default App;
