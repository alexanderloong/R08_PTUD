import {
  ADD_TO_CART,
  CHANGE_QUANTITY_CART,
  DELETE_ITEM_CART,
  UPDATE_TOTALCART_CART,
} from "../context/constants";

const initialState = {
  itemCart: [],
  quantityItem: 0,
};

function cartReducer(state, action) {
  const { itemCart, totalCart, quantity } = state;

  const { code, quantityIt } = action.payload;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        itemCart: action.payload.itemCart,
        quantityItem: action.payload.quantityItem,
      };
    case CHANGE_QUANTITY_CART:
      let index = itemCart.findIndex((obj) => obj.code === code);

      let updItemCart = itemCart;
      updItemCart[index].quantity = quantityIt;
      return {
        ...state,
        itemCart: updItemCart,
      };
    case UPDATE_TOTALCART_CART:
      return {
        ...state,
        totalCart: action.payload,
      };
    case DELETE_ITEM_CART:
      let updItemCart2 = itemCart;

      updItemCart2.splice(action.payload, 1);
      return {
        ...state,
        itemCart: updItemCart2,
      };

    default:
      throw new Error("Invalid action!");
  }
}

export { initialState };
export default cartReducer;
