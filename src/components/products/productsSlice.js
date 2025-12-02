import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    loadProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { loadProducts } = productsSlice.actions;
export default productsSlice.reducer;
