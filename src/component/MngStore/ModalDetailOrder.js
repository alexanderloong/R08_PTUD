import React from "react";
import { PriceFormat } from "../Global/PriceFormat";

let detailOrder = [
  {
    code: "ab11111",
    name: "Thịt heo 1kg",
    quantity: 3,
    price: 120000,
  },
  {
    code: "ab11112",
    name: "Gạo 1kg",
    quantity: 3,
    price: 50000,
  },
  {
    code: "ab11113",
    name: "Chuối nải",
    quantity: 1,
    price: 40000,
  },
];

let listItem = detailOrder.map((item) => (
  <tr>
    <th>{item.code}</th>
    <td>{item.name}</td>
    <td>{item.quantity}</td>
    <td>
      <PriceFormat price={item.price} />
    </td>
    <td>
      <PriceFormat price={item.price * item.quantity} />
    </td>
  </tr>
));
const DetailOrder = (props) => {
  // State

  // Render button modal
  const renderBtnModal = (param) => {
    switch (param) {
      case 1:
        return (
          <button
            type="button"
            className="btn btn-primary mx-3"
            data-bs-dismiss="modal"
            disabled={props.status !== 1 ? true : false}
          >
            Xác nhận đơn hàng
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal fade" id={props.code}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Chi tiết đơn hàng
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Mã sản phẩm</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Đơn giá</th>
                  <th scope="col">Tổng cộng</th>
                </tr>
              </thead>
              <tbody>{listItem}</tbody>
            </table>
          </div>
          <div className="modal-footer">{renderBtnModal(props.status)}</div>
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
