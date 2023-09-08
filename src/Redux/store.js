import { configureStore } from "@reduxjs/toolkit";
import dailyBonusCountSlice from "./features/DailyBonusCount/dailyBonusCountSlice";
import dailyBonusTypeSlice from "./features/DailyBonusType/dailyBonusTypeSlice";

export const store = configureStore({
    reducer: {
        dailyBonusCount:dailyBonusCountSlice,
        dailyBonusType:dailyBonusTypeSlice
    }
})