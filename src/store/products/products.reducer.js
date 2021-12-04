import {HYDRATE} from "next-redux-wrapper";
import {
  FRETES_UPDATE,
  PRODUCTS_UPDATE,
  BASKET_PRODUCTS_UPDATE,
  BASKET_PRODUCTS_RESET,
} from "./products.action";

const INITIAL_STATE = {
  items: [],
  basketItems: [
    {id: 1, name: "Brigadeiro", price: 2.0},
    {id: 2, name: "Pão de queijo", price: 3.99},
  ],
  fretes: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case FRETES_UPDATE:
      return {...state, fretes: [...action.payload]};
    case PRODUCTS_UPDATE:
      return {...state, items: [...action.payload]};
    case BASKET_PRODUCTS_UPDATE:
      return {...state, basketItems: [...action.payload]};
    case BASKET_PRODUCTS_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
