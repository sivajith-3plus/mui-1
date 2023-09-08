import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dailyBonusTypeSlice = createSlice({
  name: "dailyBonusType",
  initialState,
  reducers: {
    setDailyBonusType: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDailyBonusType } = dailyBonusTypeSlice.actions;

export default dailyBonusTypeSlice.reducer;
