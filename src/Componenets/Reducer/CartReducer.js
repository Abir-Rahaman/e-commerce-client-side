const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, SingleProduct } = action.payload;
    let existingProduct = state.cart.find((curItem ) => curItem.id === id + color)



    if(existingProduct){
      let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === id+color ){
          let newAmount = curElem.amount + amount;

          if(newAmount >= curElem.max){
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount:newAmount,
          }
        }else{
          return curElem;

        }
      })

      
      return {
        ...state,
        cart:updatedProduct ,
      };


    }else{
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
 

   
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "CLEAR_ITEM") {
   
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default cartReducer;
