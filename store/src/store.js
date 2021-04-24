// store.js
import React, { createContext, useReducer } from "react";

const initialState = { items: [] };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addItemToCart":
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : action.item
          ),
        };
        break;
      case "getCartItemCount":
        return state.items.length;
        break;
      case "getItemsInCart":
        return state.items;
        break;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
