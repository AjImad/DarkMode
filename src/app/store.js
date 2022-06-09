import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "../feature/modeSlice";

export const store = configureStore({
    reducer: {
        mode: modeSlice,
    }
})