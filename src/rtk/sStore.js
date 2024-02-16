import { configureStore } from "@reduxjs/toolkit";
import ProudctSlice from "./slices/Proudct-Slice";
import CartSlice from "./slices/Cart-Slice";

export const store = configureStore({
    reducer: {
        Proudcts: ProudctSlice,
        Cart: CartSlice,
    },
});