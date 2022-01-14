import React, { useState } from "react";

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

const ModalAddProduct = () => {
  const [stateProductAdd, setProductAdd] = useState();

  const handleChange = (e) => {
    setProductAdd({ ...stateProductAdd, [e.target.name]: e.target.value });
  };
  return (
    <div className="modal fade" id="addProduct">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Thêm sản phẩm
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body" style={{ width: "50%" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Link ảnh</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Loại sản phẩm</th>
                  <th scope="col">Đơn giá</th>
                  <th scope="col">Tồn kho</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="update-product"
                      name="imgProduct"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="update-product"
                      name="nameProduct"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select
                      className="update-product"
                      name="typeProduct"
                      onChange={handleChange}
                    >
                      <option value="">-</option>
                      {catalog}
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="update-product"
                      name="priceProduct"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="update-product"
                      name="quantityProduct"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Thêm sản phẩm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddProduct;
