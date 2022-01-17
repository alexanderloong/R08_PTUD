import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../context/action";
import { cartContext } from "../context/cartContext";

const Signin = () => {
  // Context
  const { postLogin, dispatchCart, postLoginShipper } = useContext(cartContext);

  // State
  const [state, setState] = useState();
  const [stateTypeUser, setTypeUser] = useState(1);

  //useNavigate
  const navigator = useNavigate();

  // Handle
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (stateTypeUser === 1) response = await postLogin(state);
    else response = await postLoginShipper(state);

    if (response.data.code === 0) {
      await dispatchCart(
        loginUser({
          data: response.data.payload,
          type: stateTypeUser === 1 ? 0 : 2,
        })
      );
      navigator("/");
    }
    console.log(state);
    console.log(response);
  };

  //Render
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="wrap">
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3>Đăng Nhập</h3>
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
                <div className="form-group d-flex ">
                  <div className="form-check mx-3 ">
                    <input
                      className="form-check-input"
                      value="cus"
                      type="radio"
                      name="radioCheck"
                      id="flexRadioDefault1"
                      readOnly
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                      onClick={(e) => setTypeUser(1)}
                    >
                      Khách hàng
                    </label>
                  </div>
                  <div className="form-check ">
                    <input
                      value="ship"
                      className="form-check-input"
                      type="radio"
                      name="radioCheck"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                      onClick={(e) => setTypeUser(2)}
                    >
                      Shipper
                    </label>
                  </div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  className="signin-form"
                >
                  <div className="form-group mt-5">
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChange}
                      name="username"
                      required
                    />
                    <label className="form-control-placeholder" type="username">
                      Số điện thoại/Email
                    </label>
                  </div>
                  <div className="form-group mt-4">
                    <input
                      id="password-field"
                      name="password"
                      type="password"
                      className="form-control"
                      onChange={handleChange}
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
                <div className="text-center">
                  Đăng nhập dành cho cửa hàng
                  <a className="text-center" href="/loginStore">
                    &nbsp;Tại Đây
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
