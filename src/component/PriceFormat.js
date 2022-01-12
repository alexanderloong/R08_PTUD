import React from "react";
import NumberFormat from "react-number-format";

const PriceFormat = (props) => {
  return (
    <NumberFormat
      thousandSeparator={true}
      suffix={"₫"}
      value={props.price}
      displayType={"text"}
    />
  );
};

const DateFormat = () => {
  return (
    <NumberFormat
      className="form-control"
      format="##/##/####"
      mask={["D", "D", "M", "M", "Y", "Y", "Y", "Y"]}
      required
    />
  );
};

const PhoneNumberFormat = () => {
  return (
    <NumberFormat
      className="form-control"
      format="#### ### ### "
      mask="_"
      required
    />
  );
};

export { PriceFormat, DateFormat, PhoneNumberFormat };
