import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const adminUsersSlice = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    setAdminUsers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAdminUsers } = adminUsersSlice.actions;

export default adminUsersSlice.reducer;
