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
      state.email = action.payload.email;
    },
    userLoggedOut: (state) => {
      state.name = undefined;
      state.email = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
