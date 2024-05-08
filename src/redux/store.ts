import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.slice";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export type IRootState = ReturnType<typeof store.getState>;

export default store;