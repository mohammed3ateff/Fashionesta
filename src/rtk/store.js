import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import cartSlice from "./slices/cart-slice";
import productDetailsSlice from "./slices/product-details-slice";
import wishlistSlice from "./slices/wishlist-slice";
import categorySlice from "./slices/category-slice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
    wishList: wishlistSlice,
  },
});
