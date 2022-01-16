import React, { useContext } from "react";
import { addToCart } from "../context/action";
import { cartContext } from "../context/cartContext";

import { PriceFormat } from "../Global/PriceFormat";

let product = [
  {
    code: "pr00001",
    img: "asset/img/featured/feature-1.jpg",
    name: "Thịt bò",
    type: "meat",
    store: "a1",
    price: 150000,
  },
  {
    code: "pr00002",
    img: "asset/img/featured/feature-2.jpg",
    name: "Chuối",
    type: "fruits",
    store: "a1",
    price: 150000,
  },
  {
    code: "pr00003",
    img: "asset/img/featured/feature-3.jpg",
    name: "Ổi",
    type: "fruits",
    store: "a2",
    price: 150000,
  },
  {
    code: "pr00004",
    img: "asset/img/featured/feature-4.jpg",
    name: "Dưa hấu",
    store: "a2",
    type: "fruits",
    price: 150000,
  },
  {
    code: "pr00005",
    img: "asset/img/featured/feature-5.jpg",
    name: "Nho",
    type: "fruits",
    price: 150000,
  },
  {
    code: "pr00006",
    img: "asset/img/featured/feature-6.jpg",
    name: "Hamburger",
    type: "fastfood",
    price: 150000,
  },
  {
    code: "pr00007",
    img: "asset/img/featured/feature-7.jpg",
    name: "Xoài",
    type: "fruits",
    price: 150000,
  },
  {
    code: "pr00008",
    img: "asset/img/featured/feature-8.jpg",
    name: "Táo",
    type: "fruits",
    price: 150000,
  },
];
const FeatureProduct = () => {
  // Context
  const { stateCart, dispatchCart } = useContext(cartContext);
  const { itemCart, totalCart, quantityItem } = stateCart;

  // Handle
  const handleClick = (item) => {
    let listItem = itemCart;

    item.quantity = 1;
    listItem.push(item);

    dispatchCart(
      addToCart({
        itemCart: listItem,
        totalCart: totalCart + item.price,
        quantityItem: quantityItem + 1,
      })
    );
  };
  // Mapping
  let listProduct = product.map((item, index) => (
    <div key={index} className={`col-lg-3 col-md-4 col-sm-6 mix ${item.type}`}>
      <div className="featured__item">
        <div
          className="featured__item__pic set-bg"
          data-setbg={item.img}
          style={{
            backgroundImage: `url("${item.img}")`,
          }}
        >
          <ul className="featured__item__pic__hover">
            <li>
              <a href="/">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <button onClick={() => handleClick(item)}>
                <i className="fa fa-shopping-cart"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="/">{item.name}</a>
          </h6>
          <h5>
            <PriceFormat price={item.price} />
          </h5>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Sản Phẩm Nổi Bật</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".meat">Thịt</li>
                <li data-filter=".fruits">Trái cây</li>
                <li data-filter=".vegetables">Rau sạch</li>
                <li data-filter=".fastfood">Đồ ăn nhanh</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">{listProduct}</div>
      </div>
    </section>
  );
};

export default FeatureProduct;
