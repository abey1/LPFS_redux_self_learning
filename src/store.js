import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ProductsReducer from "./components/products/productsSlice";
import CartReducer from "./components/cart/cartSlice";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: CartReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
