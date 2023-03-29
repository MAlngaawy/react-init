import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./main/Slices/counterSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
