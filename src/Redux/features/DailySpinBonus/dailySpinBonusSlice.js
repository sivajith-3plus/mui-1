import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dailyBonusSlice = createSlice({
  name: "dailySpinBonus",
  initialState,
  reducers: {
    setDailyBonus: (state, action) => {
        state.data = action.payload;
    },
  },
});

export const { setDailyBonus } = dailyBonusSlice.actions;

export default dailyBonusSlice.reducer;
