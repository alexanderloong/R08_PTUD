import React, { useState, useContext } from "react";

import { cartContext } from "../../context/cartContext";

import { PriceFormat } from "../../Global/PriceFormat";

const ItemProduct = (props) => {
  // Context
  const { stateCatalog } = useContext(cartContext);

  // State

  // Function
  const getNameCatalog = (id) => {
    return stateCatalog.find((x) => (x.id = "61e2c51182673f921a62f403"))
      .category_name;
  };

  // Handle

  // Logger

  // Render
  return (
    <tr>
      <th>{props.item.id}</th>
      <td>
        {props.stateUpdateProduct !== props.item.id ? (
          props.item.product_name
        ) : (
          <input
            type="text"
            className="update-product"
            defaultValue={props.item.product_name}
            name="product_name"
            onChange={props.handleChange}
          />
        )}
      </td>
      <td>
        {props.stateUpdateProduct !== props.item.id ? (
          getNameCatalog(props.item.id_category)
        ) : (
          <select
            className="update-product"
            defaultValue={getNameCatalog(props.item.id_category)}
            name="id_category"
            onChange={props.handleChange}
          >
            <option value={props.item.id_category}>
              {getNameCatalog(props.item.id_category)}
            </option>
            {props.catalog}
          </select>
        )}
      </td>
      <td>
        {props.stateUpdateProduct !== props.item.id ? (
          <PriceFormat price={props.item.unit_price} />
        ) : (
          <input
            type="text"
            className="update-product"
            defaultValue={props.item.unit_price}
            name="unit_price"
            onChange={props.handleChange}
          />
        )}
      </td>
      <td>
        {props.stateUpdateProduct !== props.item.id ? (
          props.item.product_remaining
        ) : (
          <input
            type="text"
            className="update-product"
            defaultValue={props.item.product_remaining}
            name="product_remaining"
            onChange={props.handleChange}
          />
        )}
      </td>

      <td>
        {/* Button detail */}
        {props.stateUpdateProduct !== props.item.id ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.setCode(props.item.id)}
            disabled={props.stateUpdateProduct === 0 ? false : true}
          >
            Chỉnh sửa
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              props.setCode(0);
            }}
          >
            Cập nhật
          </button>
        )}
      </td>
    </tr>
  );
};

export default ItemProduct;
