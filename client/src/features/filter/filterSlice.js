import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  selectedRoomTypes: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    initiateSelectedRoomTypes: (state, action) => {
      state.selectedRoomTypes = action.payload;
    },
    addSelectedRoomTypes: (state, action) => {
      state.selectedRoomTypes = state.selectedRoomTypes.concat(action.payload);
    },
    removeSelectedRoomTypes: (state, action) => {
      state.selectedRoomTypes = state.selectedRoomTypes.filter(
        (item) => item.roomType !== action.payload
      );
    },
  },
});

export default filterSlice.reducer;
export const {
  updateSearch,
  addSelectedRoomTypes,
  removeSelectedRoomTypes,
  initiateSelectedRoomTypes,
} = filterSlice.actions;
