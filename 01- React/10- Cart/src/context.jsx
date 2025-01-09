import { createContext, useContext, useReducer, useEffect } from "react";
import cartItems from "../data";
import reducer from "./reducer";
import { ACTIONS } from "./constants";

const CartContext = createContext();

const initialState = {
  cart: cartItems,
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => dispatch({ type: ACTIONS.CLEAR });
  const remove = (id) => dispatch({ type: ACTIONS.REMOVE, payload: { id } });
  const changeQuantity = (id, quantity) =>
    dispatch({ type: ACTIONS.CHANGE_QUANTITY, payload: { id, quantity } });

  useEffect(() => {
    dispatch({ type: ACTIONS.CALCULATE });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, clearCart, remove, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
