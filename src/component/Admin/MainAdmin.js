import React, { useState } from "react";

// Variables
let activeButton = "list-group-item list-group-item-action active";
let nonActiveButton = "list-group-item list-group-item-action";

const MainAdmin = () => {
  // State
  const [stateTab, setTab] = useState(0);

  // Render tab
  const renderTab = (param) => {
    switch (param) {
      case 0:
        return "< />;";
      case 1:
        return "< />;";
      case 2:
        return "< />;";
      default:
        return null;
    }
  };

  return (
    <div className="container my-5">
      <div className="blog__details__hero__text">
        <h2 style={{ color: "rgb(127, 173, 57)" }}>
          Trang quản lý dành cho Admin
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
            <i className="fa fa-list-ol" /> Quản lý Cửa hàng
          </button>
          <button
            type="button"
            className={stateTab === 2 ? activeButton : nonActiveButton}
            onClick={() => setTab(2)}
          >
            <i className="fa fa-th" /> Quản lý Khách Hàng
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
          <button type="button" className={nonActiveButton}>
            <i className="fa fa-sign-out" /> Đăng xuất
          </button>
        </section>

        <section className="col-lg-9">{renderTab(stateTab)}</section>
      </div>
    </div>
  );
};

export default MainAdmin;
