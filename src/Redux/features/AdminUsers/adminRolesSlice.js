import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const adminRolesSlice = createSlice({
  name: "adminRoles",
  initialState,
  reducers: {
    setAdminRoles: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAdminRoles } = adminRolesSlice.actions;

export default adminRolesSlice.reducer;
