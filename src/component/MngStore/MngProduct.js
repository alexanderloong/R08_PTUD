import React, { useState } from "react";

import { PriceFormat } from "../Global/PriceFormat";

let listProduct = [
  {
    code: "p00001",
    name: "Chuối nải",
    type: "Trái cây",
    price: 50000,
    quantity: 100,
  },
];

let listCatalog = [
  "Thịt, cá, hải sản",
  "Rau, củ, trái cây",
  "Đồ uống các loại",
  "Sữa uống các loại",
  "Bánh kẹo các loại",
  "Gạo, bột, đồ khô",
  "Đồ mát, đông lạnh",
  "Chăm sóc cá nhân",
  "Đồ dùng gia đình",
  "Chăm sóc cá nhân",
];

let catalog = listCatalog.map((item, index) => (
  <option key={index} value={item}>
    {item}
  </option>
));

const MngProduct = () => {
  // State
  const [stateUpdateProduct, setCode] = useState();
  const [stateProductAfter, setProductAfter] = useState();

  // Function handle
  const handleChange = (e) => {
    setProductAfter({ ...stateProductAfter, [e.target.name]: e.target.value });
  };

  console.log(stateProductAfter);
  return (
    <form className="detail-tab">
      <h3>Quản lý sản phẩm</h3>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <label>Mã sản phẩm</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-lg-3">
          <label>Tên sản phẩm</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <label>Loại sản phẩm</label>
          <select className="form-select form-select-lg">
            <option value="5">Tất cả</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã sản phẩm</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Loại sản phẩm</th>
              <th scope="col">Đơn giá</th>
              <th scope="col">Tồn kho</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listProduct.map((item) => (
              <tr key={item.code}>
                <th>{item.code}</th>
                <td>
                  {stateUpdateProduct !== item.code ? (
                    item.name
                  ) : (
                    <input
                      type="text"
                      className="update-product"
                      defaultValue={item.name}
                      name="nameProduct"
                      onChange={handleChange}
                    />
                  )}
                </td>
                <td>
                  {stateUpdateProduct !== item.code ? (
                    item.type
                  ) : (
                    <select
                      className="update-product"
                      defaultValue={item.type}
                      name="typeProduct"
                      onChange={handleChange}
                    >
                      <option value={item.type}>{item.type}</option>
                      {catalog}
                    </select>
                  )}
                </td>
                <td>
                  {stateUpdateProduct !== item.code ? (
                    <PriceFormat price={item.price} />
                  ) : (
                    <input
                      type="text"
                      className="update-product"
                      defaultValue={item.price}
                      name="typeProduct"
                      onChange={handleChange}
                    />
                  )}
                </td>
                <td>
                  {stateUpdateProduct !== item.code ? (
                    item.quantity
                  ) : (
                    <input
                      type="text"
                      className="update-product"
                      defaultValue={item.quantity}
                      name="quantityProduct"
                      onChange={handleChange}
                    />
                  )}
                </td>

                <td>
                  {/* Button detail */}
                  {stateUpdateProduct !== item.code ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setCode(item.code)}
                    >
                      Chỉnh sửa
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => setCode(0)}
                    >
                      Cập nhật
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default MngProduct;
