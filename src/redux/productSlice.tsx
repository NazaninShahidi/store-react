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
    decrement: (state) => {},
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

export const { addToCart, decrement, incrementByAmount } = productSlice.actions;
export default productSlice.reducer;
