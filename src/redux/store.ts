import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import shopSlice from "./shop-slice";
import wishlistReducer from "./wishlist-slice";

const store = configureStore({
  reducer: {
    modalSlice,
    shopSlice,
    wishlist: wishlistReducer,
  },
});

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
