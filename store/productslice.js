import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetch', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    //   .addCase(fetchProducts.pending, (state) => {
    //     state.status = 'loading';
    //   })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
    //   .addCase(fetchProducts.rejected, (state) => {
    //     state.status = 'failed';
    //   });
  },
});


export default productSlice.reducer;
