import { createContext, useReducer } from "react";

import cartReducer, { initialState } from "../reducers/cartReducer";

// Export Constant
export const cartContext = createContext();

// Provider
const CartContextProvider = ({ children }) => {
  // State
  const [stateCart, dispatchCart] = useReducer(cartReducer, initialState);

  // Method

  // Context Method
  //   const cartContextMethod = { [stateCart, dispatchCart] };

  return (
    <cartContext.Provider value={[stateCart, dispatchCart]}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
