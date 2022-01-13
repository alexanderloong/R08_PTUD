import React, { Fragment } from "react";
import { PriceFormat } from "../Global/PriceFormat";
import Breadcrumb from "./Breadcrumb";
import HeroSection from "../Global/HeroSection";
import ItemCart from "./ItemCart";

import useScript from "../../hooks/useScript";

let product = [
  {
    img: "asset/img/cart/cart-1.jpg",
    name: "Rau quả 1",
    type: "combo",
    quantity: 1,
    price: 150000,
  },
  {
    img: "asset/img/cart/cart-2.jpg",
    name: "Rau quả 2",
    type: "combo",
    quantity: 2,
    price: 150000,
  },
  {
    img: "asset/img/cart/cart-3.jpg",
    name: "Chuối",
    type: "fruits",
    quantity: 2,
    price: 150000,
  },
];

let totalPrice = 0;
product.map((item) => (totalPrice += item.price * item.quantity));

const ShopingCart = () => {
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
      <HeroSection />

      {/* <!-- Breadcrumb Section Begin -->   */}
      <Breadcrumb />
      {/* // <!-- Breadcrumb Section End --> */}

      {/* // <!-- Shoping Cart Section Begin --> */}
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Tên sản phẩm</th>
                      <th>Giá cả</th>
                      <th>Số lượng</th>
                      <th>Tổng cộng</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item, index) => (
                      <ItemCart
                        key={index}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        priceTotal={item.price * item.quantity}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href="/" className="primary-btn cart-btn">
                  Tiếp tục mua hàng
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Mã giảm giá</h5>
                  <form action="#">
                    <input type="text" placeholder="Nhập mã giảm giá" />
                    <button type="submit" className="site-btn">
                      Áp dụng
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Tổng giỏ hàng</h5>
                <ul>
                  <li>
                    Tổng giỏ hàng{" "}
                    <span>
                      <PriceFormat price={totalPrice} />
                    </span>
                  </li>
                  <li>
                    Giảm giá{" "}
                    <span>
                      <PriceFormat price={100000} />
                    </span>
                  </li>
                  <li>
                    Tổng cộng{" "}
                    <span>
                      <PriceFormat price={totalPrice - 100000} />
                    </span>
                  </li>
                </ul>
                <a href="/payment" className="primary-btn">
                  Tiến Hành Thanh Toán
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shoping Cart Section End --> */}
    </Fragment>
  );
};

export default ShopingCart;
