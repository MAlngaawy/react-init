import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../../main/Slices/counterSlice";
import { apiSlice } from "../Api/apiSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
