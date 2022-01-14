import React, { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import FormAddress from "../ManageAccount/FormAddress";

import { loginUser } from "../context/action";
const AccountCus = () => {
  // Context
  const { stateCart, putStore, dispatchCart } = useContext(cartContext);
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
    let value = e.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const response = await putStore(state, user.id);

    dispatchCart(loginUser(response.data.payload));
    console.log(user.id);
    console.log(state);
    console.log(response);
  };
  console.log(state);
  // Render
  return (
    <form className="detail-tab">
      <h3>Thông tin cửa hàng</h3>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Tên cửa hàng</label>
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
