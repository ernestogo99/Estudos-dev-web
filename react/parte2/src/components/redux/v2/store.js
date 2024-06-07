import { configureStore } from "@reduxjs/toolkit";
import idreducer from "./slices/idslice";
export const store = configureStore({
  reducer: {
    id: idreducer,
  },
});
