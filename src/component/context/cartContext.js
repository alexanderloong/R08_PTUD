import { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import cartReducer, { initialState } from "../reducers/cartReducer";

// Export Constant
export const cartContext = createContext();

// Provider
const CartContextProvider = ({ children }) => {
  // Reducer
  const [stateCart, dispatchCart] = useReducer(cartReducer, initialState);

  // State
  const [stateLevel, setStateLevel] = useState([]);
  const [stateCatalog, setStateCatalog] = useState([]);
  const [stateType, setStateType] = useState([0]);

  // Method

  // Context Method

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

  // Use Effect
  useEffect(async () => await getAllLevel(), []);
  useEffect(async () => await getCatalog(), []);

  // Context data
  const contextData = {
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
  };

  return (
    <cartContext.Provider value={contextData}>{children}</cartContext.Provider>
  );
};

export default CartContextProvider;
