import apiSlice from "../api/apiSlice";

const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "room",
    }),
  }),
});

export const { useGetRoomsQuery } = imageApi;
