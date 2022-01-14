import React, { Fragment } from "react";

import { useState, useEffect } from "react";

const subvn = require("sub-vn");

let allProvinces = subvn.getProvinces();
let allDistricts, allWard;
let tinh, huyen, xa;

const FormAddress = (props) => {
  // Local State
  const [stateTinh, setTinh] = useState(0);
  const [stateQuan, setQuan] = useState(0);
  const [stateXa, setXa] = useState(0);

  // Hanle Tinh/ThanhPho
  tinh = allProvinces.map((item, index) => (
    <option key={index} value={JSON.stringify(item)}>
      {item.name}
    </option>
  ));

  // Handle Quan/Huyen
  allDistricts = subvn.getDistrictsByProvinceCode(`${stateTinh}`);

  if (allDistricts !== undefined) {
    huyen = allDistricts.map((item, index) => (
      <option key={index} value={JSON.stringify(item)}>
        {item.name}
      </option>
    ));
  }

  // Handle Phuong/Xa
  allWard = subvn.getWardsByDistrictCode(`${stateQuan}`);

  if (allWard !== undefined) {
    xa = allWard.map((item, index) => (
      <option key={index} value={JSON.stringify(item)}>
        {item.name}
      </option>
    ));
  }
  return (
    <Fragment>
      <div className="form-group">
        <label>Tỉnh/Thành phố</label>
        <select
          className="form-select form-select-lg"
          name="city"
          onChange={(e) => {
            setTinh(JSON.parse(e.target.value).code);
            props.handle(e);
          }}
        >
          <option value="0">{props.city !== null ? props.city : "-"}</option>
          {tinh}
        </select>
      </div>
      <div className="form-group  ">
        <label>Quận/Huyện</label>
        <select
          className="form-select form-select-lg"
          name="district"
          onChange={(e) => {
            setQuan(JSON.parse(e.target.value).code);
            props.handle(e);
          }}
        >
          <option value="0">
            {props.district !== null ? props.district : "-"}
          </option>
          {huyen}
        </select>
      </div>
      <div className="form-group ">
        <label>Phường/Xã</label>
        <select
          name="ward"
          className="form-select form-select-lg"
          onChange={(e) => {
            setXa(JSON.parse(e.target.value).code);
            props.handle(e);
          }}
        >
          <option value="0">{props.ward !== null ? props.ward : "-"}</option>
          {xa}
        </select>
      </div>
    </Fragment>
  );
};

export default FormAddress;
