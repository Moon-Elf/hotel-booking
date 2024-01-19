import apiSlice from "../api/apiSlice";

const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => "room",
    }),
    getRoom: builder.query({
      query: (id) => `room/${id}`,
    }),
    bookRoom: builder.mutation({
      query: ({ id, body }) => ({
        url: `room/book/${id}`,
        method: "POST",
        body: body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        await queryFulfilled;
        dispatch(
          apiSlice.util.updateQueryData(
            "getRoom",
            arg.id.toString(),
            (draft) => {
              draft.bookedCount += 1;
              draft.users.push(arg.body);
            }
          )
        );
        dispatch(
          apiSlice.util.updateQueryData("getRooms", undefined, (draft) => {
            const newDraft = draft.map((item) => {
              if (item._id === arg.id) {
                return { ...item, bookedCount: item.bookedCount + 1 };
              } else return item;
            });
            return newDraft;
          })
        );
      },
    }),
  }),
});

export const { useGetRoomsQuery, useGetRoomQuery, useBookRoomMutation } =
  imageApi;
