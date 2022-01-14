import React from "react";

let listOrder = [
  {
    code: "KH100000",
    date: "Nguyễn Đình Thảo",
    totalBill: "Vùng Xanh",
    status: 1,
  },
  {
    code: "KH100002",
    date: "Nguyễn Chí Duy",
    totalBill: "Vùng Vàng",
    status: 2,
  },
  {
    code: "KH100003",
    date: "Nguyễn Hà Thành",
    totalBill: "Vùng Cam",
    status: 2,
  },
  {
    code: "KH100004",
    date: "Lê Huỳnh Long",
    totalBill: "Vùng đỏ",
    status: 0,
  },
];

const MngCus = () => {
  // Render status
  const renderStatus = (param) => {
    switch (param) {
      case 1:
        return <td style={{ color: "#7fad39" }}>Bị khoá</td>;
      case 2:
        return <td style={{ color: "blue" }}>Đang hoạt động</td>;
      case 0:
        return <td style={{ color: "gray" }}>Không hoạt động</td>;
      default:
        return null;
    }
  };

  return (
    <div className="detail-tab">
      <h3>Quản lý khách hàng</h3>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <label>Mã khách hàng</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <label>Trạng thái</label>
          <select className="form-select form-select-lg">
            <option value="">Tất cả</option>
            <option value="0">Không hoạt động</option>
            <option value="2">Đang hoạt động</option>
            <option value="1">Bị khoá</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã khách hàng</th>
              <th scope="col">Tên khách hàng</th>
              <th scope="col">Vùng dịch</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listOrder.map((item) => (
              <tr key={item.code}>
                <th>{item.code}</th>
                <td>{item.date}</td>
                <td>{item.totalBill}</td>
                {renderStatus(item.status)}
                <td>
                  {/* Button Lock */}
                  <button
                    type="button"
                    className="btn mx-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#${item.code}_`}
                    disabled={
                      item.status === 2 || item.status === 0 ? false : true
                    }
                  >
                    <i className="fa fa-lock" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MngCus;
