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

export default PriceFormat;
