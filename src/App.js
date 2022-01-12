import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./component/homepage/Home";
import Signin from "./component/SignInOut/Signin";
import Signup from "./component/SignInOut/Signup";
import ShopingCart from "./component/ShopingCart/ShopingCart";
import MngCus from "./component/ManageAccount/MngCus";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shoping-cart" element={<ShopingCart />} />
        <Route path="/profile" element={<MngCus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
