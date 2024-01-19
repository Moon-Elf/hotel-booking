import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: undefined,
  phone: undefined,
  id: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.id = action.payload.id;
    },
    userLoggedOut: (state) => {
      state.name = undefined;
      state.phone = undefined;
      state.id = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
