import apiSlice from "../api/apiSlice";

const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "room",
    }),
    getRoom: builder.query({
      query: (id) => `room/${id}`,
    }),
  }),
});

export const { useGetRoomsQuery, useGetRoomQuery } = imageApi;
