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
    increaseProductCount: (state, action) => {
      const product = state.value.find(
        (product) => product.id === action.payload
      );
      if (product) {
        const newArr = [...state.value, ...Array(1).fill(product)];
        state.value = newArr;
      }
    },
    decreaseProductCount: (state, action) => {
      const index = state.value.findIndex(
        (product) => product.id === action.payload
      );
      if (state.value.length === 1) {
        return;
      }
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  decreaseProductCount,
  increaseProductCount,
} = productSlice.actions;
export default productSlice.reducer;
