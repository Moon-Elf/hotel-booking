import apiSlice from "../api/apiSlice";

const facilityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: () => "facility",
    }),
  }),
});

export const { useGetFacilitiesQuery } = facilityApi;
