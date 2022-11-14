import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";


const CartContext = createContext();

const getLocalCartData = () =>{
  let localCartDta = localStorage.getItem("cart");
  if(localCartDta === []){
    return [];
  }else{
     return JSON.parse(localCartDta);
  }
}


const initialState = {
  // cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, SingleProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, SingleProduct } });
    
  };
  

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  useEffect(() =>{
    localStorage.setItem("cart", JSON.stringify(state.cart))
  },[state.cart])

  const clearCart = () =>{
    dispatch({ type: "CLEAR_ITEM"});
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };