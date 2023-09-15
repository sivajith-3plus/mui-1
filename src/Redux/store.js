import { configureStore } from "@reduxjs/toolkit";
import dailyBonusCountSlice from "./features/DailyBonusCount/dailyBonusCountSlice";
import dailyBonusTypeSlice from "./features/DailyBonusType/dailyBonusTypeSlice";
import dailySpinBonusSlice from "./features/DailySpinBonus/dailySpinBonusSlice";
import adminUsersSlice from "./features/AdminUsers/adminUsersSlice";
import adminRolesSlice from "./features/AdminUsers/adminRolesSlice";

export const store = configureStore({
    reducer: {
        dailyBonusCount:dailyBonusCountSlice,
        dailyBonusType:dailyBonusTypeSlice,
        dailySpinBonus:dailySpinBonusSlice,
        adminUsers:adminUsersSlice,
        adminRoles:adminRolesSlice
    }
})