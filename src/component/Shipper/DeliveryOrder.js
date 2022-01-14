import React from "react";
import DetailOrder from "../MngStore/ModalDetailOrder";
import { PriceFormat } from "../Global/PriceFormat";

let listOrder = [
  {
    code: "a100000",
    date: "58/25 Trần Quốc Thảo, p. 2, q. 3",
    level: "Vùng đỏ",
    totalBill: 100000,
    status: 1,
  },
  {
    code: "a100001",
    date: "58/25 Trần Quốc Thảo, p. 2, q. 3",
    level: "Vùng cam",
    totalBill: 500000,
    status: 2,
  },
  {
    code: "a100002",
    date: "58/25 Trần Quốc Thảo, p. 2, q. 3",
    level: "Vùng vàng",
    totalBill: 800000,
    status: 3,
  },
  {
    code: "a100004",
    date: "58/25 Trần Quốc Thảo, p. 2, q. 3",
    level: "Vùng Xanh",
    totalBill: 800000,
    status: 4,
  },
  {
    code: "a100003",
    date: "58/25 Trần Quốc Thảo, p. 2, q. 3",
    level: "Vùng xanh",
    totalBill: 50000,
    status: 0,
  },
];

const DeliveryOrder = () => {
  return (
    <div className="detail-tab">
      <h3>Quản lý đơn hàng</h3>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <label>Mã đơn hàng</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <hr />
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã đơn hàng</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Vùng dịch</th>
              <th scope="col">Tổng tiền</th>

              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listOrder.map((item) => (
              <tr key={item.code}>
                <th>{item.code}</th>
                <td>{item.date}</td>
                <td>{item.level}</td>
                <td>
                  <PriceFormat price={item.totalBill} />
                </td>

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

export default DeliveryOrder;
