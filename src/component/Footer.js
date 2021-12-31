import React from "react";

const Footer = () => {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <a href="//index.html">
                  <img src="asset/img/logo.png" alt="" />
                </a>
              </div>
              <ul>
                <li>
                  Address: 113 Thạch Lam, p. Phú Thạnh, q. Tân Phú, TP. HCM
                </li>
                <li>Phone: 1900 1009</li>
                <li>Email: dj.thaomeo@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
            <div className="footer__widget">
              <h6>Liên kết</h6>
              <ul>
                <li>
                  <a href="/">Thông tin website</a>
                </li>
                <li>
                  <a href="/">Giới thiệu công ty</a>
                </li>
                <li>
                  <a href="/">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="/">Chính sách giao hàng</a>
                </li>
                <li>
                  <a href="/">Chính sách đổi trả</a>
                </li>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Hướng dẫn mua hàng</a>
                </li>
                <li>
                  <a href="/">Dịch vụ</a>
                </li>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Nhận thông tin mới nhất</h6>
              <p>Cung cấp email để chúng tôi có thể làm điều đó</p>
              <form action="#">
                <input type="text" placeholder="Nhập email của bạn" />
                <button type="submit" className="site-btn">
                  Nhận thông tin
                </button>
              </form>
              <div className="footer__widget__social">
                <a href="/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | This template is made with
                  <i className="fa fa-heart" aria-hidden="true"></i> by
                  <a href="/ttps://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
              </div>
              <div className="footer__copyright__payment">
                <img
                  src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/07/logo-da-thong-bao-website-voi-bo-cong-thuong-696x264.png"
                  alt=""
                  style={{ width: "100px", margin: "10px" }}
                />
                <img
                  src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png"
                  alt=""
                  style={{ width: "100px", margin: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
