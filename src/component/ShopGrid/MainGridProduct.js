import React, { Fragment, useState } from "react";

import HeroSection from "../Global/HeroSection";
import BreadcrumbG from "./BreadcrumbG";

import useScript from "../../hooks/useScript";
import { PriceFormat } from "../Global/PriceFormat";

let listCatalog = [
  "Thịt, cá, hải sản",
  "Rau, củ, trái cây",
  "Đồ uống các loại",
  "Sữa uống các loại",
  "Bánh kẹo các loại",
  "Gạo, bột, đồ khô",
  "Đồ mát, đông lạnh",
  "Chăm sóc cá nhân",
  "Đồ dùng gia đình",
  "Chăm sóc cá nhân",
];

let product = [
  {
    img: "asset/img/featured/feature-1.jpg",
    name: "Thịt bò",
    type: "meat",
    price: 150000,
  },
  {
    img: "asset/img/featured/feature-2.jpg",
    name: "Chuối",
    type: "fruits",
    price: 150000,
  },
  {
    img: "asset/img/featured/feature-3.jpg",
    name: "Ổi",
    type: "fruits",
    price: 150000,
  },
  {
    img: "asset/img/featured/feature-4.jpg",
    name: "Dưa hấu",
    type: "fruits",
    price: 150000,
  },
  {
    img: "asset/img/featured/feature-5.jpg",
    name: "Nho",
    type: "fruits",
    price: 150000,
  },
  {
    img: "asset/img/featured/feature-6.jpg",
    name: "Hamburger",
    type: "fastfood",
    price: 150000,
  },
  {
    img: "asset/img/featured/feature-7.jpg",
    name: "Xoài",
    type: "fruits",
    price: 150000,
  },
  {
    img: "asset/img/featured/feature-8.jpg",
    name: "Táo",
    type: "fruits",
    price: 150000,
  },
];

let listProduct = product.map((item, index) => (
  <div key={index} className={`col-lg-3 col-md-4 col-sm-6 mix ${item.type}`}>
    <div className="featured__item">
      <div
        className="featured__item__pic set-bg"
        data-setbg={item.img}
        style={{
          backgroundImage: `url("${item.img}")`,
        }}
      >
        <ul className="featured__item__pic__hover">
          <li>
            <button>
              <i className="fa fa-heart"></i>
            </button>
          </li>
          <li>
            <button onClick={() => console.log(123)}>
              <i className="fa fa-shopping-cart" />
            </button>
          </li>
        </ul>
      </div>
      <div className="featured__item__text">
        <h6>
          <a href="/">{item.name}</a>
        </h6>
        <h5>
          <PriceFormat price={item.price} />
        </h5>
      </div>
    </div>
  </div>
));

const MainGridProduct = () => {
  useScript("asset/js/jquery-3.3.1.min.js");
  useScript("asset/js/bootstrap.min.js");
  useScript("asset/js/jquery.nice-select.min.js");
  useScript("asset/js/jquery-ui.min.js");
  useScript("asset/js/jquery.slicknav.js");
  useScript("asset/js/mixitup.min.js");
  useScript("asset/js/owl.carousel.min.js");
  useScript("asset/js/main.js");

  // State
  const [catalog, setStatus] = useState(0);
  return (
    <Fragment>
      <HeroSection />
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
                    {listCatalog.map((item, index) => (
                      <li key={index}>
                        <a href="/">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9 col-md-7">
              <h6>Có 18 sản phẩm phù hợp</h6>
              <div className="row">{listProduct}</div>
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
