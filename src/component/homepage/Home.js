import React, { Fragment } from "react";

import HeroHeader from "./HeroHeader";
import FeatureProduct from "./FeatureProduct";
import Banner from "./Banner";

const Home = () => {
  return (
    <Fragment>
      <HeroHeader /> <FeatureProduct />
      <Banner />
    </Fragment>
  );
};

export default Home;
