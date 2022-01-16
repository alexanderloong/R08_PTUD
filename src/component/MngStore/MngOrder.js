import React, { useState, useEffect, useContext } from "react";
import { PriceFormat } from "../Global/PriceFormat";
import DetailOrder from "./ModalDetailOrder";
import ModalOrderCancel from "./ModalOrderCancel";

import { cartContext } from "../context/cartContext";

const MngOrder = () => {
  // Render status
  const renderStatus = (param) => {
    switch (param) {
      case 1:
        return <td style={{ color: "#7fad39" }}>Chờ xác nhận</td>;
      case 2:
        return <td style={{ color: "#7fad39" }}>Chờ giao hàng</td>;
      case 3:
        return <td style={{ color: "blue" }}>Đang giao</td>;
      case 4:
        return <td style={{ color: "red" }}>Hoàn thành</td>;
      case 0:
        return <td style={{ color: "gray" }}>Đã huỷ</td>;
      default:
        return null;
    }
  };

  // Context
  const { getOrderStore, stateCart } = useContext(cartContext);
  const { user } = stateCart;

  // State
  const [stateOrder, setStateOrder] = useState([]);

  // Call API

  useEffect(async () => {
    const response = await getOrderStore(user.id);

    setStateOrder(response.data.payload);
  }, []);

  // Render
  return (
    <div className="detail-tab">
      <h3>Quản lý đơn hàng</h3>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <label>Mã đơn hàng</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <label>Trạng thái</label>
          <select className="form-select form-select-lg">
            <option value="5">Tất cả</option>
            <option value="0">Đã huỷ</option>
            <option value="1">Chờ xác nhận</option>
            <option value="2">Chờ giao hàng</option>
            <option value="3">Đang giao</option>
            <option value="4">Hoàn thành</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Thời gian</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {stateOrder.map((item) => (
              <tr key={item.code}>
                <th>{item.code}</th>
                <td>{item.date}</td>
                <td>
                  <PriceFormat price={item.totalBill} />
                </td>
                {renderStatus(item.status)}
                <td>
                  <button
                    type="button"
                    className={
                      item.status === 1 ? "btn btn-warning" : "btn btn-primary"
                    }
                    data-bs-toggle="modal"
                    data-bs-target={`#${item.code}`}
                  >
                    {item.status === 1 ? "Chờ xác nhận" : "Chi tiết"}
                  </button>

                  <button
                    type="button"
                    className="btn mx-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#${item.code}_`}
                    disabled={item.status === 1 ? false : true}
                  >
                    <i className="fa fa-times" />
                  </button>
                  <DetailOrder code={item.code} status={item.status} />
                  <ModalOrderCancel code={`${item.code}_`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MngOrder;
