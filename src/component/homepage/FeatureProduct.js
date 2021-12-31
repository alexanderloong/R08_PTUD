import React from "react";

import NumberFormat from "react-number-format";

const FeatureProduct = () => {
  let product = [
    {
      img: "asset/img/featured/feature-1.jpg",
      name: "Thịt bò",
      type: "meat",
      price: 150000,
    },
    {
      img: "asset/img/featured/feature-2.jpg",
      name: "Chuối",
      type: "fruits",
      price: 150000,
    },
    {
      img: "asset/img/featured/feature-3.jpg",
      name: "Ổi",
      type: "fruits",
      price: 150000,
    },
    {
      img: "asset/img/featured/feature-4.jpg",
      name: "Dưa hấu",
      type: "fruits",
      price: 150000,
    },
    {
      img: "asset/img/featured/feature-5.jpg",
      name: "Nho",
      type: "fruits",
      price: 150000,
    },
    {
      img: "asset/img/featured/feature-6.jpg",
      name: "Hamburger",
      type: "fastfood",
      price: 150000,
    },
    {
      img: "asset/img/featured/feature-7.jpg",
      name: "Xoài",
      type: "fruits",
      price: 150000,
    },
    {
      img: "asset/img/featured/feature-8.jpg",
      name: "Táo",
      type: "fruits",
      price: 150000,
    },
  ];

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
              <a href="/">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="/">{item.name}</a>
          </h6>
          <h5>
            <NumberFormat
              thousandSeparator={true}
              suffix={"₫"}
              value={item.price}
              displayType={"text"}
            />
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
