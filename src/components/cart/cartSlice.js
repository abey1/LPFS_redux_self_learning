import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart_products: [], total: 0 },
  reducers: {
    addItem: (state, action) => {
      const hasProduct = state.cart_products.some(
        (item) => item.id === action.payload.id
      );
      if (hasProduct) {
        state.cart_products.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
            item.price += action.payload.price;
          } else return item;
        });
      } else {
        state.cart_products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
