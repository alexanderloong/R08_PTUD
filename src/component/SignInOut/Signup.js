import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext";

import FormAddress from "../ManageAccount/FormAddress";

import { loginUser } from "../context/action";

const Signup = () => {
  // Context
  const { stateLevel, postRegisterUser, dispatchCart } =
    useContext(cartContext);

  //
  const navigate = useNavigate();

  // State
  const [stateInfor, setStateInfor] = useState();

  // Handle
  const handleFormAddress = (e) => {
    setStateInfor({
      ...stateInfor,
      [e.target.name]: JSON.parse(e.target.value).name,
    });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value;
    if (name === "sex") value = parseInt(e.target.value);
    else value = e.target.value;

    setStateInfor({
      ...stateInfor,
      [name]: value,
    });
  };

  const handleClick = async (e) => {
    console.log(stateInfor);

    let response = await postRegisterUser(stateInfor);
    if (response.code === 0) {
      dispatchCart(loginUser({ data: response.payload, type: 0 }));
      navigate("/");
    }
    console.log(response);
  };

  // Logger
  // useEffect(() => console.log(stateLevel), []);
  // useEffect(() => console.log(stateInfor), []);

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
                <form
                  action="#"
                  onSubmit={(e) => e.preventDefault()}
                  className="signin-form row"
                >
                  <div className="col" style={{ paddingTop: "12.9px" }}>
                    <div className="form-group mt-4">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
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
                        type="text"
                        className="form-control"
                        name="cmnd"
                        onChange={handleChange}
                        required
                      />
                      <label className="form-control-placeholder">
                        Số CMND/ CCCD
                      </label>
                    </div>
                    <div className="form-group mt-4">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
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
                        name="confirm_password"
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
                        name="sex"
                        onChange={handleChange}
                        required
                      >
                        <option value="0">-</option>
                        <option value={1}>Nam</option>
                        <option value={2}>Nữ</option>
                        <option value={3}>Khác</option>
                      </select>
                    </div>
                  </div>

                  <div className="col">
                    <FormAddress handle={handleFormAddress} />
                    <div className="form-group ">
                      <label>Số nhà và đường</label>
                      <input
                        type="text"
                        className="form-control"
                        name="street"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Cấp độ dịch</label>
                      <select
                        className="form-select form-select-lg"
                        name="area_type"
                        onChange={handleChange}
                        required
                      >
                        <option value="0">-</option>
                        {stateLevel.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.area_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="button"
                      className="form-control btn btn-primary rounded submit px-3"
                      style={{ width: "150px" }}
                      onClick={handleClick}
                    >
                      Đăng ký
                    </button>
                  </div>
                </form>
                <div className="text-center">
                  Bạn đã có tài khoản? <a href="/signin">Đăng Nhập</a>
                </div>
                <div className="text-center">
                  Đăng ký dành cho cửa hàng{" "}
                  <button
                    className="btn-invisible"
                    onClick={() => navigate("/registerStore")}
                  >
                    Tại đây
                  </button>
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
