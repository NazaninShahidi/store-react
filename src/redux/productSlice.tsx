import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../dummyData";

export interface CounterState {
  value: Array<IProduct>;
}

const initialState: CounterState = {
  value: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;
    },
    deleteFromCart: (state, action) => {
      const newArr = state.value.filter(
        (product) => product.id !== action.payload
      );
      state.value = newArr;
    },
  },
});

export const { addToCart, deleteFromCart } = productSlice.actions;
export default productSlice.reducer;
