import React from "react";

const AccountShipper = () => {
  return (
    <form className="detail-tab">
      <h3>Thông tin tài khoản</h3>
      <hr />
      <div className="row">
        <div className="col-lg-5">
          <label>Họ và tên:</label>
          <b>&nbsp;Nguyễn Văn Bình</b>
        </div>
        <div className="col-lg-3">
          <label>Level:</label>
          <b>&nbsp;50</b>
        </div>
        <div className="col">
          <label>Ngày tạo:</label>
          <b>&nbsp;01/01/2022</b>
        </div>
      </div>
    </form>
  );
};

export default AccountShipper;
