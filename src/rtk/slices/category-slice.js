import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categoriesSlice/fetchCategories",
  async () => {
    const res = await fetch(
      "https://api.easy-orders.net/api/v1/external-apps/categories",
      {
        headers: {
          "Api-Key": "3807b462-a905-455f-93c2-43ceb58774cd",
        },
      }
    );
    const data = await res.json();
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
