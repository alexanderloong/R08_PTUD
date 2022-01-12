import React from "react";
import FormAddress from "./FormAddress";

const AccountCus = () => {
  return (
    <form className="detail-tab">
      <h3>Cá Nhân</h3>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Họ và tên</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Giới tính</label>
            <select className="form-select form-select-lg">
              <option value="0">-</option>
              <option value="1">Nam</option>
              <option value="2">Nữ</option>
              <option value="3">Khác</option>
            </select>
          </div>
        </div>
        <div className="col-lg-6">
          <FormAddress />
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Thay đổi
        </button>
      </div>
    </form>
  );
};

export default AccountCus;
