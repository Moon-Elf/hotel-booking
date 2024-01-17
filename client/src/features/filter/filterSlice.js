import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  selectedRoomFacilities: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    initiateSelectedRoomFacilities: (state, action) => {
      state.selectedRoomFacilities = action.payload;
    },
    addSelectedRoomFacilities: (state, action) => {
      state.selectedRoomFacilities = state.selectedRoomFacilities.concat(
        action.payload
      );
    },
    removeSelectedRoomFacilities: (state, action) => {
      state.selectedRoomFacilities = state.selectedRoomFacilities.filter(
        (item) => item.roomType !== action.payload
      );
    },
  },
});

export default filterSlice.reducer;
export const {
  updateSearch,
  addSelectedRoomFacilities,
  removeSelectedRoomFacilities,
  initiateSelectedRoomFacilities,
} = filterSlice.actions;
