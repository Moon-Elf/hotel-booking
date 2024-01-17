import apiSlice from "../api/apiSlice";

const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: () => "image",
    }),
  }),
});

export const { useGetFacilitiesQuery } = imageApi;
