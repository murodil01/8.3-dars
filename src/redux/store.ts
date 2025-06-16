import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
const store = configureStore({
  reducer: {
    modalSlice,
  },
});

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
