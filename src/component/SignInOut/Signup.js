import React, { useState } from "react";

import { DateFormat, PhoneNumberFormat } from "../Global/PriceFormat";
import FormAddress from "../ManageAccount/FormAddress";

const Signup = () => {
  // State
  const [stateInfor, setStateInfor] = useState();

  // Handle
  const handleChange = (e) => {
    setStateInfor({
      ...stateInfor,
      [e.target.name]: e.target.value,
    });
  };

  console.log(stateInfor);

  // Render
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-10">
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
                <form action="#" className="signin-form row">
                  <div className="col" style={{ paddingTop: "12.9px" }}>
                    <div className="form-group mt-4">
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        onChange={handleChange}
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
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        type="username"
                      >
                        Email
                      </label>
                    </div>
                    <div className="form-group mt-4">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handleChange}
                        required
                      />
                      <label className="form-control-placeholder" type="name">
                        Họ và tên
                      </label>
                    </div>

                    <div className="form-group mt-4">
                      <input
                        type="password"
                        className="form-control"
                        name="passwords"
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        type="password"
                      >
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
                        name="rePassword"
                        onChange={handleChange}
                        required
                      />
                      <label
                        className="form-control-placeholder"
                        type="password"
                      >
                        Xác Nhận Mật khẩu
                      </label>
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div className="form-group">
                      <label>Giới tính</label>
                      <select
                        className="form-select form-select-lg"
                        name="gender"
                        onChange={handleChange}
                        required
                      >
                        <option value="0">-</option>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                        <option value="3">Khác</option>
                      </select>
                    </div>
                  </div>

                  <div className="col">
                    <FormAddress handle={handleChange} />
                    <div className="form-group">
                      <label>Cấp độ dịch</label>
                      <select
                        className="form-select form-select-lg"
                        name="level"
                        onChange={handleChange}
                        required
                      >
                        <option value="0">-</option>
                        <option value="4">Vùng Đỏ</option>
                        <option value="3">Vùng Cam</option>
                        <option value="2">Vùng Vàng</option>
                        <option value="1">Vùng Xanh</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                      style={{ width: "150px" }}
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
