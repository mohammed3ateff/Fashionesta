import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteFromWishlist: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToWishlist, deleteFromWishlist, updateQuantity } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
