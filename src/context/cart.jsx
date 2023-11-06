import { createContext } from "react";
import { useCartReducer } from "../reducers/cartAction.js"

export const CartContext = createContext();


export function CartProvider({ children }) {
  
  const { state, addToCart, clearCart, removeFromCart, revomeCuantity } = useCartReducer();
  
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
        revomeCuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
