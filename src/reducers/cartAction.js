import { useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cartReducer";
import { CART_ACTION_TYPES } from "./cartTypes"

const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, REVOME_QUANTITY } = CART_ACTION_TYPES

export const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: CLEAR_CART,
    });

  const revomeCuantity = (product) =>
    dispatch({
      type: REVOME_QUANTITY,
      payload: product,
    });

    return { state, addToCart, removeFromCart, clearCart, revomeCuantity };
}