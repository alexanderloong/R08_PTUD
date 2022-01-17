import React, { Fragment, useContext, useState } from "react";

import HeroSection from "../Global/HeroSection";
import BreadcrumbG from "./BreadcrumbG";

import useScript from "../../hooks/useScript";
import { cartContext } from "../context/cartContext";

// import { useNavigate } from "react-router-dom";

import { PriceFormat } from "../Global/PriceFormat";
import { addToCart } from "../context/action";

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
  const { stateCart, dispatchCart } = useContext(cartContext);
  const { itemCart, totalCart, quantityItem } = stateCart;

  // Handle function

  // State
  const [stateSearch, setStateSearch] = useState("");
  const [stateListProduct, setStateListProduct] = useState([]);

  // Router
  // const navigate = useNavigate();

  // Handle function
  const handleChange = (e) => {
    setStateSearch(e.target.value);
  };

  const handleClick = async () => {
    let response = await getSearchProduct(stateSearch);
    setStateListProduct(response.data.payload);
  };

  const handleClickCart = (item) => {
    let listItem = itemCart;

    item.quantity = 1;
    listItem.push(item);

    dispatchCart(
      addToCart({
        itemCart: listItem,
        totalCart: totalCart + item.price,
        quantityItem: quantityItem + 1,
      })
    );
  };

  // Mapping
  let listProduct = stateListProduct.map((item, index) => (
    <div key={item.id} className={`col-lg-3 col-md-4 col-sm-6 mix`}>
      <div className="featured__item">
        <div
          className="featured__item__pic set-bg"
          data-setbg={item.img}
          style={
            {
              // backgroundImage: `url("${item.images[0]}")`,
            }
          }
        >
          <ul className="featured__item__pic__hover">
            <li>
              <a href="/">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <button onClick={() => handleClickCart(item)}>
                <i className="fa fa-shopping-cart"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="/">{item.product_name}</a>
          </h6>
          <h5>
            <PriceFormat price={item.unit_price} />
          </h5>
        </div>
      </div>
    </div>
  ));

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
              <div className="row"> {listProduct} </div>
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
