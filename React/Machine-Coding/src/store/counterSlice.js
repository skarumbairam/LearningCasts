import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increament: (state, action) => {
      state.count += 1;
    },
    decreament: (state, action) => {
      state.count -= 1;
    },
    increamentByAmount: (state, action) => {
      console.log(action);
      state.count += Number(action.payload);
    },
    decreamentByCount: (state, action) => {
      state.count -= Number(action.payload);
    },
  },
});

export default counterSlice.reducer;
export const { increament, decreament, increamentByAmount, decreamentByCount } =
  counterSlice.actions;
