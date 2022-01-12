import React from "react";
import { PriceFormat } from "../PriceFormat";

const ItemCart = (props) => {
  return (
    <tr>
      <td className="shoping__cart__item">
        <img src={props.img} alt="" />
        <h5>{props.name}</h5>
      </td>
      <td className="shoping__cart__price">
        <PriceFormat price={props.price} />
      </td>
      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <input type="text" defaultValue={props.quantity} />
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">
        <PriceFormat price={props.priceTotal} />
      </td>
      <td className="shoping__cart__item__close">
        <span className="icon_close"></span>
      </td>
    </tr>
  );
};

export default ItemCart;
