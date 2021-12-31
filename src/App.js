import "./App.css";
import React from "react";
import { Fragment } from "react";

import Header from "./component/Header";
import HeroHeader from "./component/homepage/HeroHeader";

import useScript from "./hooks/useScript";
import FeatureProduct from "./component/homepage/FeatureProduct";
import Footer from "./component/Footer";
import Banner from "./component/homepage/Banner";

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
    <Fragment>
      <Header />
      <HeroHeader />

      <FeatureProduct />
      <Banner />

      <Footer />
    </Fragment>
  );
}

export default App;
