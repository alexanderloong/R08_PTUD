import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

const AccountShipper = () => {
  // Context
  const { stateCart } = useContext(cartContext);
  const { user } = stateCart;

  // State

  //

  // Render
  return (
    <form className="detail-tab">
      <h3>Thông tin tài khoản</h3>
      <hr />
      <div className="row">
        <div className="col-lg-5">
          <label>Họ và tên:</label>
          <b>&nbsp;{user.name}</b>
        </div>
        <div className="col-lg-3">
          <label>Level:</label>
          <b>&nbsp;50</b>
        </div>
        <div className="col">
          <label>Ngày tạo:</label>
          <b>&nbsp;{user.created_at}</b>
        </div>
      </div>
    </form>
  );
};

export default AccountShipper;
