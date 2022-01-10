import React from "react";

const HeroSection = () => {
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
                {listCatalog.map((item, index) => (
                  <li key={index}>
                    <a href="/">{item}</a>
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
                  <input type="text" placeholder="Bạn đang cần gì?" />
                  <button type="submit" className="site-btn">
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
