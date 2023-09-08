import { configureStore } from "@reduxjs/toolkit";
import dailyBonusCountSlice from "./features/dailyBonusCountSlice";

export const store = configureStore({
    reducer: {
        dailyBonusCount:dailyBonusCountSlice
    }
})