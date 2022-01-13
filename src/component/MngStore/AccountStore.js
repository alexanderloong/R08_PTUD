import React from "react";
import FormAddress from "../ManageAccount/FormAddress";

const AccountStore = () => {
  return (
    <form className="detail-tab">
      <h3>Thông tin cửa hàng</h3>
      <hr />
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Tên cửa hàng</label>
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
            <label>Loại cửa hàng</label>
            <select className="form-select form-select-lg">
              <option value="0">-</option>
              <option value="1">Hệ thống</option>
              <option value="2">Bán lẻ</option>
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

export default AccountStore;
