import React from "react";
import AccountCus from "./AccountCus";

const MngCus = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Các mục lựa chọn */}
        <section className="list-group col">
          <button
            type="button"
            className="list-group-item list-group-item-action active"
          >
            <i className="fa fa-user" /> Tài khoản
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            <i className="fa fa-shopping-cart" /> Lịch sử đơn hàng
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            <i className="fa fa-shield" /> Mật khẩu và bảo mật
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            <i className="fa fa-heart" /> Sản phẩm yêu thích
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-action"
          >
            <i className="fa fa-cog" /> Cài đặt tài khoản
          </button>
        </section>

        <section className="col-lg-9">
          <AccountCus />
        </section>
      </div>
    </div>
  );
};

export default MngCus;
