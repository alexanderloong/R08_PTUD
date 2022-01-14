import {
  ADD_TO_CART,
  CHANGE_QUANTITY_CART,
  DELETE_ITEM_CART,
  UPDATE_TOTALCART_CART,
} from "./constants";

export const addToCart = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const changeQuantity = (payload) => ({
  type: CHANGE_QUANTITY_CART,
  payload,
});

export const updateTotalCart = (payload) => ({
  type: UPDATE_TOTALCART_CART,
  payload,
});

export const deleteItemCart = (payload) => ({
  type: DELETE_ITEM_CART,
  payload,
});
