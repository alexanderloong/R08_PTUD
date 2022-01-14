import React, { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import FormAddress from "./FormAddress";

import { loginUser } from "../context/action";
const AccountCus = () => {
  // Context
  const { stateCart, putCustomer, dispatchCart } = useContext(cartContext);
  const { user } = stateCart;

  // State
  const [state, setState] = useState();

  // Handle
  const handleFormAddress = (e) => {
    setState({
      ...state,
      [e.target.name]: JSON.parse(e.target.value).name,
    });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value;
    if (name === "sex") value = parseInt(e.target.value);
    else value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const response = await putCustomer(state, user.id);

    dispatchCart(loginUser(response.data.payload));
    console.log(response);
  };
  console.log(state);
  // Render
  return (
    <form className="detail-tab">
      <h3>Cá Nhân</h3>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Họ và tên</label>
            <input
              type="text"
              className="form-control"
              defaultValue={user.name}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              defaultValue={user.phone}
              onChange={handleChange}
              name="phone"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              defaultValue={user.email}
              onChange={handleChange}
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <select
              onChange={handleChange}
              name="sex"
              className="form-select form-select-lg"
            >
              <option value={user.sex}>
                {user.sex === 1 ? "Nam" : user.sex === 2 ? "Nữ" : "Khác"}
              </option>
              <option value="1">Nam</option>
              <option value="2">Nữ</option>
              <option value="3">Khác</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6">
          <FormAddress
            handle={handleFormAddress}
            district={user.district}
            ward={user.ward}
            city={user.city}
          />
          <div className="form-group ">
            <label>Số nhà và đường</label>
            <input
              type="text"
              className="form-control"
              name="street"
              onChange={handleChange}
              defaultValue={user.street}
              required
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Thay đổi
        </button>
      </div>
    </form>
  );
};

export default AccountCus;
