import { CART_ACTION_TYPES } from "./cartTypes";

const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, REVOME_QUANTITY } =
  CART_ACTION_TYPES;

export const cartInitialState = JSON.parse(window.localStorage.getItem("cart")) || [];

export const updateLocalStorage = state => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [ADD_TO_CART]: (state, actionPayload) => {
    const { id } = actionPayload;
    const productInCartIndex = state.findIndex((item) => item.id === id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(state);
      newCart[productInCartIndex].quantity += 1;
      updateLocalStorage(newCart);
      return newCart;
    }
    const newState =  [
      ...state,
      {
        ...actionPayload,
        quantity: 1,
      },
    ];

    updateLocalStorage(newState);
    return newState;

  },
  [REMOVE_FROM_CART]: (state, actionPayload) => {
    const { id } = actionPayload;
    const newState =  state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;

  },
  [CLEAR_CART]: () => {
    updateLocalStorage(cartInitialState)
    return cartInitialState;
  },
  [REVOME_QUANTITY]: (state, actionPayload) => {
    const { id } = actionPayload;
    const productInCartIndex = state.findIndex((item) => item.id === id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(state);
      newCart[productInCartIndex].quantity = Math.max(
        0,
        newCart[productInCartIndex].quantity - 1
      );
      updateLocalStorage(newCart);
      return newCart;
    }
  },
};


export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  console.log(actionType, "actionType");
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, actionPayload) : state;
};

