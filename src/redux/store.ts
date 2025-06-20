import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import shopSlice from "./shop-slice";

const store = configureStore({
  reducer: {
    modalSlice,
    shopSlice,
  },
});

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
