import {applyMiddleware, combineReducers, createStore} from "redux";
import {createWrapper} from "next-redux-wrapper";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import productsReducer from "./products";
import userReducer from "./user";

const reducers = combineReducers({
  products: productsReducer,
  user: userReducer,
});

const makeStore = () => {
  // Create store
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );

  // Return store
  return store;
};

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, {debug: false});
