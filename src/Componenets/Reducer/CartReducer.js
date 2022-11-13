const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, SingleProduct } = action.payload;
 

    let cartProduct;

    cartProduct = {
      id: id + color,
      name: SingleProduct.name,
      color: color,
      amount: amount,
      image: SingleProduct.image[0].url,
      price: SingleProduct.price,
      max: SingleProduct.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  return state;
};

export default cartReducer;
