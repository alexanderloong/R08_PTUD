import React, { Fragment } from "react";

import Header from "../Global/Header";
import Footer from "../Global/Footer";

import Home from "../homepage/Home";
import Signin from "../SignInOut/Signin";
import Signup from "../SignInOut/Signup";
import ShopingCart from "../ShopingCart/ShopingCart";
import MngCus from "../ManageAccount/MainCus";
import MainGridProduct from "../ShopGrid/MainGridProduct";
import MainDetail from "../ShopDetail/MainDetail";
import { Route, Routes } from "react-router-dom";
import RegisterStore from "../MngStore/registerStore";
import LoginStore from "../MngStore/LoginStore";

const RouteCustomer = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="shoping-cart" element={<ShopingCart />} />
        <Route path="profile" element={<MngCus />} />
        <Route path="search" element={<MainGridProduct />} />
        <Route path="detail" element={<MainDetail />} />
        <Route path="registerStore" element={<RegisterStore />} />
        <Route path="loginStore" element={<LoginStore />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default RouteCustomer;
