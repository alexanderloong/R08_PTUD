import React, { useState, useContext, useEffect } from "react";

import ModalAddProduct from "./ModalAddProduct";
import { cartContext } from "../../context/cartContext";
import ItemProduct from "./ItemProduct";

const MngProduct = () => {
  // Context
  const { stateCatalog, stateCart, getProductOfStore } =
    useContext(cartContext);

  const { user } = stateCart;

  // State
  const [stateProduct, setStateProduct] = useState([]);
  const [stateProductAfter, setProductAfter] = useState();
  const [stateUpdateProduct, setCode] = useState(0);

  // Function handle
  const handleChange = (e) => {
    setProductAfter({ ...stateProductAfter, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(stateProductAfter);
  };

  // Call API

  useEffect(async () => {
    const response = await getProductOfStore(user.id);
    setStateProduct(response.data.payload);
  }, []);

  // Mapping
  let catalog = stateCatalog.map((item, index) => (
    <option key={index} value={item.id}>
      {item.category_name}
    </option>
  ));

  // Render
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
            {catalog}
          </select>
        </div>
        <div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#addProduct"
            >
              Thêm sản phẩm
            </button>
            <button
              type="button"
              onClick={() => setProductAfter(0)}
              className="btn btn-primary"
            >
              Cập nhật sản phẩm
            </button>
          </div>
          <ModalAddProduct />
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
            {stateProduct.map((item, index) => (
              <ItemProduct
                catalog={catalog}
                handleChange={handleChange}
                item={item}
                key={index}
                handleClick={handleClick}
                stateUpdateProduct={stateUpdateProduct}
                setCode={setCode}
              />
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default MngProduct;
