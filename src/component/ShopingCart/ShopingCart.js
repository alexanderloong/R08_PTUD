import React, { Fragment, useContext } from "react";
import { PriceFormat } from "../Global/PriceFormat";
import Breadcrumb from "./Breadcrumb";
import HeroSection from "../Global/HeroSection";
import ItemCart from "./ItemCart";

import { updateTotalCart } from "../context/action";
import { cartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const ShopingCart = () => {
  // Context
  const { stateCart, dispatchCart, splitOrder, postOrder } =
    useContext(cartContext);
  const { itemCart } = stateCart;

  // Navigate
  const navigate = useNavigate();

  // Variables
  let ttCart = 0;

  // Handle click
  const handleClick = async (e) => {
    // Split order
    let listOrder = splitOrder(itemCart);

    // Update TotalAmount Order
    dispatchCart(updateTotalCart(ttCart));

    console.log(listOrder);
    // Call API
    let response;
    listOrder.forEach(async (item) => {
      response = await postOrder(item);
      console.log(response);
    });
  };

  // Render
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
                      <th>Cửa hàng</th>
                      <th>Giá cả</th>
                      <th>Số lượng</th>
                      <th>Tổng cộng</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemCart.map((item, index) => {
                      ttCart += item.price * item.quantity;
                      return <ItemCart key={index} item={item} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <div
                  onClick={() => navigate("/")}
                  className="primary-btn cart-btn pointer"
                >
                  Tiếp tục mua hàng
                </div>
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
                      <PriceFormat price={ttCart} />
                    </span>
                  </li>
                  <li>
                    Giảm giá{" "}
                    <span>
                      <PriceFormat price={0} />
                    </span>
                  </li>
                  <li>
                    Tổng cộng{" "}
                    <span>
                      <PriceFormat price={ttCart} />
                    </span>
                  </li>
                </ul>
                <button onClick={handleClick} className="primary-btn">
                  Tiến Hành Thanh Toán
                </button>
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
