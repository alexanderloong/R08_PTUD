import React, { useState } from "react";
import AccountStore from "./AccountStore";
import MngOrder from "./MngOrder";
import MngProduct from "./MngProduct";

// Variables
let activeButton = "list-group-item list-group-item-action active";
let nonActiveButton = "list-group-item list-group-item-action";

const MainStore = () => {
  // State
  const [stateTab, setTab] = useState(0);

  // Render tab
  const renderTab = (param) => {
    switch (param) {
      case 0:
        return <AccountStore />;
      case 1:
        return <MngOrder />;
      case 2:
        return <MngProduct />;
      default:
        return null;
    }
  };

  return (
    <div className="container my-5">
      <div className="blog__details__hero__text">
        <h2 style={{ color: "rgb(127, 173, 57)" }}>
          Trang quản lý dành cho cửa hàng
        </h2>
      </div>
      <div className="row">
        {/* Các mục lựa chọn */}
        <section className="list-group col">
          <button
            type="button"
            className={stateTab === 0 ? activeButton : nonActiveButton}
            onClick={() => setTab(0)}
          >
            <i className="fa fa-user" /> Tài khoản
          </button>
          <button
            type="button"
            className={stateTab === 1 ? activeButton : nonActiveButton}
            onClick={() => setTab(1)}
          >
            <i className="fa fa-list-ol" /> Quản lý đơn hàng
          </button>
          <button
            type="button"
            className={stateTab === 2 ? activeButton : nonActiveButton}
            onClick={() => setTab(2)}
          >
            <i className="fa fa-th" /> Quản lý sản phẩm
          </button>
          <button
            type="button"
            className={stateTab === 3 ? activeButton : nonActiveButton}
            onClick={() => setTab(3)}
          >
            <i className="fa fa-shield" /> Mật khẩu và bảo mật
          </button>
          <button
            type="button"
            className={stateTab === 4 ? activeButton : nonActiveButton}
            onClick={() => setTab(4)}
          >
            <i className="fa fa-bar-chart" /> Thống kê
          </button>
          <button
            type="button"
            className={stateTab === 5 ? activeButton : nonActiveButton}
            onClick={() => setTab(5)}
          >
            <i className="fa fa-cog" /> Cài đặt tài khoản
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "http://localhost:3000/")}
            className={nonActiveButton}
          >
            <i className="fa fa-sign-out" /> Đăng xuất
          </button>
        </section>

        <section className="col-lg-9">{renderTab(stateTab)}</section>
      </div>
    </div>
  );
};

export default MainStore;
