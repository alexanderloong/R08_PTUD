import React, { useContext, useState, useEffect } from "react";

import { PriceFormat } from "../Global/PriceFormat";

import { cartContext } from "../context/cartContext";

const ReceiveOrder = () => {
  // Context
  const { stateCart, getOrderStore, putSuccessOrder } = useContext(cartContext);
  const { user } = stateCart;

  // State
  const [stateOrder, setStateOrder] = useState([]);

  // Call API

  useEffect(async () => {
    const response = await getOrderStore("61e18691053f796fa5d99103");

    setStateOrder(response.data.payload.filter((item) => item.status === 3));
  }, []);

  console.log(stateOrder);

  // Handle function
  const handleClick = async (id) => {
    let response = await putSuccessOrder({ order_id: id, shipper_id: user.id });

    console.log(response);
  };

  // Render
  return (
    <div className="detail-tab">
      <h3>Hoàn thành đơn hàng</h3>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <label>Mã đơn hàng</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <label>Vùng dịch</label>
          <select className="form-select form-select-lg">
            <option value="5">Tất cả</option>
            <option value="1">Vùng xanh</option>
            <option value="2">Vùng vàng</option>
            <option value="3">Vùng cam</option>
            <option value="4">Vùng đỏ</option>
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
              <tr key={item.order_id}>
                <th>{item.order_id}</th>
                <td>{item.created_at}</td>
                <td>
                  <PriceFormat price={item.total_amount} />
                </td>
                <td style={{ color: "#7fad39" }}>Đang giao hàng</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleClick(item.order_id)}
                  >
                    Hoàn thành
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReceiveOrder;
