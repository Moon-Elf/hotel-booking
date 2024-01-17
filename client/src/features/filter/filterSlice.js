import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  selectedRoomFacilities: [],
  sort: "default",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
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
        (item) => item._id !== action.payload
      );
    },
  },
});

export default filterSlice.reducer;
export const {
  updateSearch,
  updateSort,
  addSelectedRoomFacilities,
  removeSelectedRoomFacilities,
  initiateSelectedRoomFacilities,
} = filterSlice.actions;
