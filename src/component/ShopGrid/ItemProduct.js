import React from "react";

import { PriceFormat } from "../Global/PriceFormat";

const ItemProduct = (props) => {
  // Render
  return (
    <div className={`col-lg-3 col-md-4 col-sm-6 mix ${props.item.id_category}`}>
      <div className="featured__item">
        <div
          className="featured__item__pic set-bg"
          data-setbg={props.item.images}
          style={{
            backgroundImage: `url("${props.item.images}")`,
          }}
        >
          <ul className="featured__item__pic__hover">
            <li>
              <button>
                <i className="fa fa-heart"></i>
              </button>
            </li>
            <li>
              <button onClick={() => console.log(123)}>
                <i className="fa fa-shopping-cart" />
              </button>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="/">{props.item.product_name}</a>
          </h6>
          <h5>
            <PriceFormat price={props.item.unit_price} />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
