import React from "react";

const BreadcrumbG = () => {
  return (
    <section
      className="breadcrumb-section set-bg"
      data-setbg="asset/img/breadcrumb.jpg"
      style={{
        backgroundImage: 'url("asset/img/breadcrumb.jpg")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
              <h2>Tìm Kiếm</h2>
              <div className="breadcrumb__option">
                <a href="/">Trang chủ</a>
                <span>Tìm kiếm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbG;
