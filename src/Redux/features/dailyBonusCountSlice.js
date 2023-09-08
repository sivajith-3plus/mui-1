import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const dailyBonusCountSlice = createSlice({
  name: "dailyBonusCount",
  initialState,
  reducers: {
    setDailyBonusCount: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDailyBonusCount } = dailyBonusCountSlice.actions;

export default dailyBonusCountSlice.reducer;
