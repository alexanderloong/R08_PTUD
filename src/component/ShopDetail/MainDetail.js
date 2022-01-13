import React, { Fragment } from "react";
import SectionDetail from "./SectionDetail";

import useScript from "../../hooks/useScript";

const MainDetail = () => {
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
      <SectionDetail />
    </Fragment>
  );
};

export default MainDetail;
