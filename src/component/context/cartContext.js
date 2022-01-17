import { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import cartReducer, { initialState } from "../reducers/cartReducer";

// Export Constant
export const cartContext = createContext("");

// Provider
const CartContextProvider = ({ children }) => {
  // Reducer
  const [stateCart, dispatchCart] = useReducer(cartReducer, initialState);
  const { user } = stateCart;
  // State
  const [stateLevel, setStateLevel] = useState([]);
  const [stateCatalog, setStateCatalog] = useState([]);
  const [stateType, setStateType] = useState([0]);

  // Method
  const splitOrder = (data) => {
    let cart = data;
    let listOrder = [];

    while (cart.length !== 0) {
      console.log(data[0].store_id);

      // Variables
      let order = {
        total_amount: 0,
        payment_method_id: "025980301",
        customer_id: user.id,
        store_id: data[0].store_id,
        products: [],
        quantities: [],
      };

      // Handle
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].store_id === data[0].store_id) {
          order.products.push(cart[index].id);
          order.quantities.push(cart[index].quantity);
          order.total_amount += cart[index].unit_price * cart[index].quantity;
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

  const getOrderStore = async (id) => {
    try {
      const response = await axios.get(
        `https://localhost:44359/api/Order/get_all_order_store?store_id=${id}`
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const getOrderCustomer = async (id) => {
    try {
      const response = await axios.get(
        `https://localhost:44359/api/Order/get_order_by_customer?customer_id=${id}`
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const getSearchProduct = async (param) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/search?name=${param}`
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const putReceiveOrder = async (data) => {
    try {
      const response = await axios.put(
        `https://localhost:44359/api/Shipper/receive_order`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const putSuccessOrder = async (data) => {
    try {
      const response = await axios.put(
        `https://localhost:44359/api/Shipper/success_order`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const postRegisterShipper = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:44359/api/Shipper/register`,
        data
      );

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const postLoginShipper = async (data) => {
    try {
      const response = await axios.post(
        `https://localhost:44359/api/Shipper/login`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const postPurchase = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `https://localhost:44359/api/Order/purchase`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const getDetailOrder = async (id) => {
    try {
      const response = await axios.get(
        `https://localhost:44359/api/Order/get_detail_order_by_id/${id}`
      );

      return response;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const putComfirmOrderStore = async (data) => {
    try {
      const response = await axios.put(
        `https://localhost:44359/api/Store/confirm_order`,
        data
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
    getOrderStore,
    getSearchProduct,
    getOrderCustomer,
    postRegisterShipper,
    postPurchase,
    getDetailOrder,
    putComfirmOrderStore,
    putReceiveOrder,
    postLoginShipper,
    putSuccessOrder,
  };

  return (
    <cartContext.Provider value={contextMethod}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
