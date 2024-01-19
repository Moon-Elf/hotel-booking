import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: undefined,
  phone: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
    userLoggedOut: (state) => {
      state.name = undefined;
      state.phone = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
