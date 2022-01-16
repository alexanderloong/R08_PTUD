import React from "react";
import AccountCus from "./AccountCus";
import { useState } from "react";
import HistoryOrder from "./HistoryOrder";

const MngCus = () => {
  // Local State
  const [stateTab, setTab] = useState(0);

  // Variables
  let activeButton = "list-group-item list-group-item-action active";
  let nonActiveButton = "list-group-item list-group-item-action";

  // Render tab
  const renderTab = (param) => {
    switch (param) {
      case 0:
        return <AccountCus />;
      case 1:
        return <HistoryOrder />;
      default:
        return null;
    }
  };
  return (
    <div className="container">
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
            <i className="fa fa-shopping-cart" /> Lịch sử đơn hàng
          </button>
          <button
            type="button"
            className={stateTab === 2 ? activeButton : nonActiveButton}
            onClick={() => setTab(2)}
          >
            <i className="fa fa-shield" /> Mật khẩu và bảo mật
          </button>
          <button
            type="button"
            className={stateTab === 3 ? activeButton : nonActiveButton}
            onClick={() => setTab(3)}
          >
            <i className="fa fa-heart" /> Sản phẩm yêu thích
          </button>
          <button
            type="button"
            className={stateTab === 4 ? activeButton : nonActiveButton}
            onClick={() => setTab(4)}
          >
            <i className="fa fa-cog" /> Cài đặt tài khoản
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className={nonActiveButton}
          >
            <i className="fa fa-cog" /> Đăng xuất
          </button>
        </section>

        <section className="col-lg-9">{renderTab(stateTab)}</section>
      </div>
    </div>
  );
};

export default MngCus;
