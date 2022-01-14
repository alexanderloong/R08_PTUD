import React from "react";
import { PriceFormat } from "../Global/PriceFormat";
import { changeQuantity } from "../context/action";

import { useCart } from "../../hooks/hookContext";

import { deleteItemCart } from "../context/action";
const ItemCart = (props) => {
  // Context
  const [stateCart, dispatch] = useCart();
  const { itemCart, totalCart, quantityItem } = stateCart;

  console.log(totalCart);

  // Handle Click
  const handleClick = () => {
    dispatch(
      deleteItemCart(itemCart.findIndex((obj) => obj.code === props.code))
    );
  };
  return (
    <tr>
      <td className="shoping__cart__item">
        <img src={props.img} alt="" style={{ width: "100px" }} />
        <h5>{props.name}</h5>
      </td>
      <td className="shoping__cart__price">
        <PriceFormat price={props.price} />
      </td>
      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <input
              type="text"
              onChange={(e) => {
                dispatch(
                  changeQuantity({
                    code: props.code,
                    quantityIt: e.target.value,
                  })
                );

                console.log(e.target.value);
              }}
              defaultValue={props.quantity}
            />
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">
        <PriceFormat price={props.priceTotal} />
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
