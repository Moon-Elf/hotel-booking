import { toast } from "react-hot-toast";
import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "user",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              name: result.data.name,
              phone: String(result.data.phone),
            })
          );
          dispatch(
            userLoggedIn({
              name: result.data.name,
              phone: result.data.phone,
            })
          );
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              name: result.data.name,
              phone: String(result.data.phone),
            })
          );
          dispatch(
            userLoggedIn({
              name: result.data.name,
              phone: result.data.phone,
            })
          );
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
    checkPhone: builder.mutation({
      query: (data) => ({
        url: "user/check",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useCheckPhoneMutation } =
  authApi;
