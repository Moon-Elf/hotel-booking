import apiSlice from "../api/apiSlice";
import { initiateSelectedRoomFacilities } from "../filter/filterSlice";

const facilityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: () => "facility",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const res = await queryFulfilled;
        dispatch(initiateSelectedRoomFacilities(res.data));
      },
    }),
  }),
});

export const { useGetFacilitiesQuery } = facilityApi;
