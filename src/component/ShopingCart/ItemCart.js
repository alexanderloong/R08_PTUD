import React, { useContext } from "react";
import { PriceFormat } from "../Global/PriceFormat";
import { changeQuantity } from "../context/action";
import { cartContext } from "../context/cartContext";

import { deleteItemCart } from "../context/action";
const ItemCart = (props) => {
  // Context
  const { stateCart, dispatchCart } = useContext(cartContext);
  const { itemCart } = stateCart;

  // Handle Click
  const handleClick = () => {
    dispatchCart(
      deleteItemCart(itemCart.findIndex((obj) => obj.id === props.item.id))
    );
  };

  // Render
  return (
    <tr>
      <td className="shoping__cart__item">
        <img src={props.item.img} alt="" style={{ width: "100px" }} />
        <h5>{props.item.product_name}</h5>
      </td>
      <td className="shoping__cart__price">{props.item.store_id}</td>
      <td className="shoping__cart__price">
        <PriceFormat price={props.item.unit_price} />
      </td>
      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <input
              type="text"
              onChange={(e) => {
                dispatchCart(
                  changeQuantity({
                    code: props.item.id,
                    quantityIt: e.target.value,
                  })
                );
              }}
              defaultValue={props.item.quantity}
            />
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">
        <PriceFormat price={props.item.quantity * props.item.unit_price} />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-invisible fa fa-times"
          onClick={handleClick}
        />
      </td>
    </tr>
  );
};

export default ItemCart;
