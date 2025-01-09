import { ACTIONS } from "./constants";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.CLEAR:
      return { ...state, cart: [] };
    case ACTIONS.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== payload.id),
      };
    case ACTIONS.CHANGE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          const { id, quantity } = payload;
          if (cartItem.id == id && quantity > 0) {
            return { ...cartItem, quantity };
          }
          return cartItem;
        }),
      };
    case ACTIONS.CALCULATE:
      return {
        ...state,
        total: state.cart.reduce((accumulator, current) => {
          const { price, quantity } = current;
          return price * quantity + accumulator;
        }, 0),
      };
  }
};

export default reducer;
