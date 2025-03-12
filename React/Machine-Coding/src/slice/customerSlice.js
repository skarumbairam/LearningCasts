import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: [],
  reducers: {
    addCustomer: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default customerSlice.reducer;
export const { addCustomer } = customerSlice.actions;
