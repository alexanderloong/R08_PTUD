import React from "react";
import NumberFormat from "react-number-format";

const Signup = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="wrap">
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3>Đăng Ký</h3>
                  </div>
                  <div className="w-100">
                    <p className="social-media d-flex justify-content-end">
                      <a
                        href="/"
                        className="social-icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </a>
                      <a
                        href="/"
                        className="social-icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </a>
                    </p>
                  </div>
                </div>
                <form action="#" className="signin-form">
                  <div className="form-group mt-4">
                    <NumberFormat
                      className="form-control"
                      format="#### ### ### "
                      mask="_"
                      required
                    />
                    <label
                      className="form-control-placeholder"
                      type="phonenumber"
                    >
                      Số điện thoại
                    </label>
                  </div>
                  <div className="form-group mt-4">
                    <input type="text" className="form-control" required />
                    <label className="form-control-placeholder" type="username">
                      Email
                    </label>
                  </div>
                  <div className="form-group mt-4">
                    <input type="text" className="form-control" required />
                    <label className="form-control-placeholder" type="name">
                      Họ và tên
                    </label>
                  </div>
                  <div className="form-group mt-4">
                    <NumberFormat
                      className="form-control"
                      format="##/##/####"
                      mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
                      required
                    />
                    <label className="form-control-placeholder" type="birthday">
                      Ngày sinh
                    </label>
                  </div>

                  <div className="form-group mt-4">
                    <input
                      id="password-field"
                      type="password"
                      className="form-control"
                      required
                    />
                    <label className="form-control-placeholder" type="password">
                      Mật khẩu
                    </label>
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                  <div className="form-group mt-4">
                    <input
                      id="password-field"
                      type="password"
                      className="form-control"
                      required
                    />
                    <label className="form-control-placeholder" type="password">
                      Xác Nhận Mật khẩu
                    </label>
                    <span
                      toggle="#password-field"
                      className="fa fa-fw fa-eye field-icon toggle-password"
                    ></span>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  Bạn đã có tài khoản? <a href="/signin">Đăng Nhập</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
