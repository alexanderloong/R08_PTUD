import { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import cartReducer, { initialState } from "../reducers/cartReducer";

// Export Constant
export const cartContext = createContext("");

// Provider
const CartContextProvider = ({ children }) => {
  // Reducer
  const [stateCart, dispatchCart] = useReducer(cartReducer, initialState);

  // State
  const [stateLevel, setStateLevel] = useState([]);
  const [stateCatalog, setStateCatalog] = useState([]);
  const [stateType, setStateType] = useState([0]);

  // Method
  const splitOrder = (data) => {
    let cart = data;
    let listOrder = [];

    while (cart.length !== 0) {
      // Variables
      const store_id = data[0].store;
      let order = {
        total_amount: 0,
        payment_method_id: "025980301",
        customer_id: "61e1313994610a9f8db2d3b2",
        store_id: store_id,
        products: [],
        quantities: [],
      };

      // Handle
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].store === store_id) {
          order.products.push(cart[index].code);
          order.quantities.push(cart[index].quantity);
          order.total_amount += cart[index].price * cart[index].quantity;
          // Delete item
          cart.splice(index, 1);

          --index;
        }
      }

      // Push to listOrder
      listOrder.push(order);
    }

    return listOrder;
  };

  // Call API
  const getAllLevel = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44359/api/Area/get_all`
      );

      setStateLevel(response.data.payload);
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const postRegisterUser = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:44359/api/Customer/register`,
        data
      );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const postRegisterStore = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:44359/api/Store/login`,
        data
      );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const postLogin = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:44359/api/Customer/login`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const putCustomer = async (data, id) => {
    try {
      const response = await axios.put(
        `https://localhost:44359/api/Customer/update/${id}`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const putStore = async (data, id) => {
    try {
      const response = await axios.put(
        `https://localhost:44359/api/Store/update/${id}`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const getCatalog = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44359/api/Category/get_all`
      );

      setStateCatalog(response.data.payload);
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const postProduct = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:44359/api/Product/create`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const postOrder = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:44359/api/Order/create`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const getProductOfStore = async (id) => {
    try {
      const response = await axios.get(
        `https://localhost:44359/api/Product/get_product_store?store_id=${id}`
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Use Effect
  useEffect(() => getAllLevel(), []);
  useEffect(() => getCatalog(), []);

  // Context method
  const contextMethod = {
    stateCart,
    dispatchCart,
    stateLevel,
    postRegisterUser,
    postLogin,
    putCustomer,
    stateCatalog,
    postRegisterStore,
    stateType,
    putStore,
    setStateType,
    postProduct,
    postOrder,
    splitOrder,
    getProductOfStore,
  };

  return (
    <cartContext.Provider value={contextMethod}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
