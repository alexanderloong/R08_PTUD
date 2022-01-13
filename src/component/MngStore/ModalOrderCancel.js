import React from "react";

const ModalOrderCancel = (props) => {
  return (
    <div className="modal fade" id={props.code}>
      <div className="modal-dialog" style={{ marginInline: "660px" }}>
        <div className="modal-content" style={{ width: "500px" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Lý do huỷ đơn {props.code}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary mx-3"
              data-bs-dismiss="modal"
            >
              Xác nhận huỷ đơn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOrderCancel;
