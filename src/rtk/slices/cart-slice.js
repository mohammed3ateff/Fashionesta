import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.find((product) => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
