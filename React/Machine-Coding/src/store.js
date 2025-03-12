import { configureStore } from "@reduxjs/toolkit";
import customerSliceReducer from "./slice/customerSlice";
const store = configureStore({
  reducer: {
    customer: customerSliceReducer,
  },
});

export default { store };
