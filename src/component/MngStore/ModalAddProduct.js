import React, { useState, useContext } from "react";

import { cartContext } from "../context/cartContext";

const ModalAddProduct = () => {
  // Context
  const { stateCatalog, postProduct, stateCart } = useContext(cartContext);

  // State
  const [stateProductAdd, setProductAdd] = useState();

  // Handle
  const handleChange = (e) => {
    setProductAdd({ ...stateProductAdd, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    stateProductAdd.store_id = stateCart.user.id;

    const response = await postProduct(stateProductAdd);

    console.log(stateProductAdd);
    console.log(response);
  };

  // Mapping
  let catalog = stateCatalog.map((item, index) => (
    <option key={index} value={item.id}>
      {item.category_name}
    </option>
  ));

  //Logger

  // Render
  return (
    <div className="modal fade" id="addProduct">
      <div className="modal-dialog " style={{ marginInline: "200px" }}>
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
          <div className="modal-body">
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
                      name="list_images"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="update-product"
                      name="product_name"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select
                      className="update-product"
                      name="product_category"
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
                      name="unit_price"
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="update-product"
                      name="quantity"
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              onClick={handleClick}
              type="button"
              className="btn btn-primary"
            >
              Thêm sản phẩm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddProduct;
