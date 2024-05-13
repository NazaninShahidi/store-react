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
    increment: (state) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;
export default productSlice.reducer;
