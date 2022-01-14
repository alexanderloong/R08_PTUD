import { useContext } from "react";
import { cartContext } from "../component/context/cartContext";

const useCart = () => {
  return useContext(cartContext);
};

export { useCart };
