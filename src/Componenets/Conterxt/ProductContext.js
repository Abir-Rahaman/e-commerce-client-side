import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/ProductReducer";

const appContext = createContext();

const API = "   https://final-defense-project-server-side.vercel.app/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_PRODUCT_API", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "MY_SINGLE_PRODUCT_API", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return <appContext.Provider value={{ ...state, getSingleProduct }}>{children}</appContext.Provider>;
};

const useProductContext = () => {
  return useContext(appContext);
};

export { AppProvider, appContext, useProductContext };
