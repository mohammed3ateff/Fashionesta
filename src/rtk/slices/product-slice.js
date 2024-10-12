import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (category) => {
    console.log("fetching products");
    console.log(category);
    let url = "https://api.easy-orders.net/api/v1/external-apps/products";
    if (category) {
      url += `?category_id=${category}`;
    }
    console.log(url);
    const res = await fetch(url, {
      headers: {
        "Api-Key": "3807b462-a905-455f-93c2-43ceb58774cd",
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
