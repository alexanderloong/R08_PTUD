import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const HeroSection = (props) => {
  // Context
  const { stateCatalog } = useContext(cartContext);

  // Render
  return (
    /* <!-- Hero Section Begin --> */
    <section className="hero hero-normal">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars"></i>
                <span>Các ngành hàng</span>
              </div>
              <ul>
                {stateCatalog.map((item, index) => (
                  <li key={index}>
                    <a href="/">{item.category_name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="#">
                  <div className="hero__search__categories">
                    Toàn ngành hàng
                    <span className="arrow_carrot-down"></span>
                  </div>
                  <input
                    type="text"
                    placeholder="Bạn đang cần gì?"
                    onChange={(e) => props.handleChange(e)}
                  />
                  <button
                    type="button"
                    className="site-btn"
                    onClick={props.handleClick}
                  >
                    Tìm kiếm
                  </button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="hero__search__phone__text">
                  <h5>1900 1009</h5>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    /* <!-- Hero Section End --> */
  );
};

export default HeroSection;
