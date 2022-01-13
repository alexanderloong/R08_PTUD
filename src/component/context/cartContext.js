import { createContext, useState } from "react";

// Export Constant
export const cartContext = createContext();

// Provider
const CartContextProvider = ({ children }) => {
  // State
  const [stateCart, setStateCart] = useState();

  // Method

  // Context Method
  const cartContextMethod = { stateCart, setStateCart };

  return (
    <cartContext.Provider value={cartContextMethod}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
