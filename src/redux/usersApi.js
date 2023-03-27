import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ['users'],
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
    addNewUser: build.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
    updateUser: build.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddNewUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi;
