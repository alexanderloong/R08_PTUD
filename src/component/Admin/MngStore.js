import React from "react";

let listOrder = [
  {
    code: "ST100000",
    date: "Bách hoá xanh 1",
    totalBill: "Hệ thống",
    status: 1,
  },
  {
    code: "ST100002",
    date: "Tạp hoá Trung An",
    totalBill: "Bán lẻ",
    status: 2,
  },
  {
    code: "ST100003",
    date: "Con Cưng",
    totalBill: "Hệ thống",
    status: 3,
  },
  {
    code: "ST100004",
    date: "Big C",
    totalBill: "Hệ thống",
    status: 0,
  },
];

const MngStore = () => {
  // Render status
  const renderStatus = (param) => {
    switch (param) {
      case 1:
        return <td style={{ color: "#7fad39" }}>Chờ duyệt</td>;
      case 2:
        return <td style={{ color: "blue" }}>Đang hoạt động</td>;
      case 3:
        return <td style={{ color: "red" }}>Bị khoá</td>;
      case 0:
        return <td style={{ color: "gray" }}>Không hoạt đọng</td>;
      default:
        return null;
    }
  };

  return (
    <div className="detail-tab">
      <h3>Quản lý cửa hàng</h3>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <label>Mã cửa hàng</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group col-lg-4">
          <label>Trạng thái</label>
          <select className="form-select form-select-lg">
            <option value="">Tất cả</option>
            <option value="0">Không hoạt động</option>
            <option value="1">Chờ duyệt</option>
            <option value="2">Đang hoạt động</option>
            <option value="3">Bị khoá</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mã cửa hàng</th>
              <th scope="col">Tên cửa hàng</th>
              <th scope="col">Loại cửa hàng</th>
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
                      item.status === 2 ||
                      item.status === 3 ||
                      item.status === 0
                        ? false
                        : true
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
export default MngStore;
