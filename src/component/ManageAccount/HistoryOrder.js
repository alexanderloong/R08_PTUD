import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";
import { DateFormat, PriceFormat } from "../Global/PriceFormat";
import DetailOrder from "./DetailOrder";

const HistoryOrder = () => {
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
        return <td style={{ color: "gray" }}>Chờ thanh toán</td>;
      default:
        return null;
    }
  };

  // Context
  const { getOrderCustomer, stateCart, postPurchase } = useContext(cartContext);
  const { user } = stateCart;

  // State
  const [listOrder, setListOrder] = useState([]);
  // Call API
  useEffect(async () => {
    let response = await getOrderCustomer(user.id);

    setListOrder(response.data.payload);
  }, []);

  // Handle function
  const handleClick = async (id) => {
    let response = await postPurchase({ order_id: id });

    // window.location.href = response.data.payload.payUrl;
    window.open(
      response.data.payload.payUrl,
      "_blank" // <- This is what makes it open in a new window.
    );
    console.log(response);
  };

  // Render
  return (
    <div className="detail-tab">
      <h3>Lịch sử đơn hàng</h3>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <label>Mã đơn hàng</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-3">
          <label>Số tiền từ</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-3">
          <label>Từ ngày</label>
          <DateFormat />
        </div>
        <div className="col-lg-3">
          <label>Đến ngày</label>
          <DateFormat />
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
              <th />
            </tr>
          </thead>
          <tbody>
            {listOrder.map((item) => (
              <tr key={item.code}>
                <th>{item.order_id}</th>
                <td>{item.created_at}</td>
                <td>
                  <PriceFormat price={item.total_amount} />
                </td>
                {renderStatus(item.status)}

                <td>
                  <div className="d-flex">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target={`#${item.code}`}
                    >
                      Chi tiết
                    </button>
                    <button
                      type="button"
                      className="btn btn-invisible"
                      onClick={() => handleClick(item.order_id)}
                    >
                      <i className="fa fa-money" />
                    </button>
                  </div>

                  <DetailOrder code={item.code} status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryOrder;
