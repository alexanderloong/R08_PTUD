import React from "react";
import { DateFormat, PriceFormat } from "../PriceFormat";
import DetailOrder from "./DetailOrder";

let listOrder = [
  {
    code: "a100000",
    date: "25/10/2021",
    totalBill: 100000,
    status: 1,
  },
  {
    code: "a100001",
    date: "25/11/2021",
    totalBill: 500000,
    status: 2,
  },
  {
    code: "a100002",
    date: "25/12/2021",
    totalBill: 800000,
    status: 3,
  },
  {
    code: "a100003",
    date: "25/01/2022",
    totalBill: 50000,
    status: 0,
  },
];

const HistoryOrder = () => {
  // Render status
  const renderStatus = (param) => {
    switch (param) {
      case 1:
        return <td style={{ color: "#7fad39" }}>Chờ xác nhận</td>;
      case 2:
        return <td style={{ color: "blue" }}>Đang giao</td>;
      case 3:
        return <td style={{ color: "red" }}>Hoàn thành</td>;
      case 0:
        return <td style={{ color: "gray" }}>Đã huỷ</td>;
      default:
        return null;
    }
  };

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
                <th>{item.code}</th>
                <td>{item.date}</td>
                <td>
                  <PriceFormat price={item.totalBill} />
                </td>
                {renderStatus(item.status)}
                <td>
                  {/* Button detail */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#${item.code}`}
                  >
                    Chi tiết
                  </button>
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
