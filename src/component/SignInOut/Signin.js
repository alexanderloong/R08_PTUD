import React from "react";

const Signin = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="wrap">
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Đăng Nhập</h3>
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
                  <div className="form-group mt-5">
                    <input type="text" className="form-control" required />
                    <label className="form-control-placeholder" type="username">
                      Số điện thoại/Email
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
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Đăng nhập
                    </button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="w-50 text-left">
                      <label className="checkbox-wrap checkbox-primary mb-0">
                        Nhớ mật khẩu
                        <input type="checkbox" defaultChecked />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="w-50 text-md-right">
                      <a href="/">Quên mật khẩu</a>
                    </div>
                  </div>
                </form>
                <div className="text-center">
                  Bạn chưa có tài khoản?
                  <a className="text-center" href="/signup">
                    &nbsp;Đăng ký
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
