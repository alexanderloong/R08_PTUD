import React, { Fragment, useContext, useState } from "react";

import HeroSection from "../Global/HeroSection";
import BreadcrumbG from "./BreadcrumbG";

import useScript from "../../hooks/useScript";
import { cartContext } from "../context/cartContext";
import ItemProduct from "./ItemProduct";

const MainGridProduct = () => {
  useScript("asset/js/jquery-3.3.1.min.js");
  useScript("asset/js/bootstrap.min.js");
  useScript("asset/js/jquery.nice-select.min.js");
  useScript("asset/js/jquery-ui.min.js");
  useScript("asset/js/jquery.slicknav.js");
  useScript("asset/js/mixitup.min.js");
  useScript("asset/js/owl.carousel.min.js");
  useScript("asset/js/main.js");

  // Context
  const { stateCatalog, getSearchProduct } = useContext(cartContext);

  // State
  const [stateSearch, setStateSearch] = useState("");
  const [stateListProduct, setStateListProduct] = useState([]);

  // Handle function
  const handleChange = (e) => {
    setStateSearch(e.target.value);
  };

  const handleClick = async () => {
    console.log(stateSearch);

    let response = await getSearchProduct(stateSearch);
    setStateListProduct(response.payload);

    console.log(response);
  };

  // Render
  return (
    <Fragment>
      <HeroSection handleChange={handleChange} handleClick={handleClick} />
      <BreadcrumbG />

      {/* <!-- Product Section Begin --> */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <div className="sidebar">
                <div className="sidebar__item">
                  <h4>Các ngành hàng</h4>
                  <ul>
                    <li>
                      <a href="/">Toàn bộ</a>
                    </li>
                    {stateCatalog.map((item, index) => (
                      <li key={index}>
                        <a href="/">{item.category_name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-7">
              <h6>Có 18 sản phẩm phù hợp</h6>
              <div className="row">
                {stateListProduct.map((item, index) => (
                  <ItemProduct item={item} key={index} />
                ))}
              </div>
              <div className="product__pagination">
                <a href="/">1</a>
                <a href="/">2</a>
                <a href="/">3</a>
                <a href="/">
                  <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product Section End --> */}
    </Fragment>
  );
};

export default MainGridProduct;
