import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
      headers: {
        "Api-Key": "3807b462-a905-455f-93c2-43ceb58774cd",
      },
    });
    const data = await res.json();
    return data;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetailsSlice",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
