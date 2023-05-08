import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const cartItem = localStorage.getItem("CART_ITEM") || "";

const parsedCartItem = cartItem !== "" ? JSON.parse(cartItem) : null;
let countSum = 0;
for (const key in parsedCartItem) {
  if (parsedCartItem.hasOwnProperty(key)) {
    countSum += parsedCartItem[key].count;
  }
}

const initialState: CounterState = {
  value: countSum,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
