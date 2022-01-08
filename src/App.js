import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import useScript from "./hooks/useScript";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./component/homepage/Home";
import Signin from "./component/SignInOut/Signin";
import Signup from "./component/SignInOut/Signup";

function App() {
  useScript("asset/js/jquery-3.3.1.min.js");
  useScript("asset/js/bootstrap.min.js");
  useScript("asset/js/jquery.nice-select.min.js");
  useScript("asset/js/jquery-ui.min.js");
  useScript("asset/js/jquery.slicknav.js");
  useScript("asset/js/mixitup.min.js");
  useScript("asset/js/owl.carousel.min.js");
  useScript("asset/js/main.js");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
