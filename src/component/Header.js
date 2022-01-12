import React from "react";

import { PriceFormat } from "./PriceFormat";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="header__top__left">
                <ul>
                  <li>
                    <i className="fa fa-envelope"></i> dj.thaomeo@gmail.com
                  </li>
                  <li>Miễn phí giao hàng cho đơn hàng trên 500k</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="header__top__right">
                <div className="header__top__right__social">
                  <a href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </div>
                <div className="header__top__right__language">
                  <img src="asset/img/language.png" alt="" />
                  <div>English</div>
                  <span className="arrow_carrot-down"></span>
                  <ul>
                    <li>
                      <a href="/">Vietnamse</a>
                    </li>
                    <li>
                      <a href="/">English</a>
                    </li>
                  </ul>
                </div>
                <div className="header__top__right__auth">
                  <a href="/signin">
                    <i className="fa fa-user"></i> Đăng Nhập
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <a href="/">
                <img src="asset/img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header__menu">
              <ul>
                <li className="active">
                  <a href="/">Trang chủ</a>
                </li>
                <li>
                  <a href="//shop-grid.html">Cửa hàng</a>
                </li>
                <li>
                  <a href="/">Thông tin</a>
                  <ul className="header__menu__dropdown">
                    <li>
                      <a href="//shop-details.html">Đặt hàng</a>
                    </li>
                    <li>
                      <a href="//shoping-cart.html">Thanh toán</a>
                    </li>
                    <li>
                      <a href="//checkout.html">Giao hàng</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="//contact.html">Liên hệ</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-heart"></i> <span>1</span>
                  </a>
                </li>
                <li>
                  <a href="/shoping-cart">
                    <i className="fa fa-shopping-bag"></i> <span>3</span>
                  </a>
                </li>
              </ul>
              <div className="header__cart__price">
                Giỏ hàng: <PriceFormat price={150000} />
              </div>
            </div>
          </div>
        </div>
        <div className="humberger__open">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
