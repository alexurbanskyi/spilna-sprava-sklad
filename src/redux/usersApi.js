import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/"}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "users",
            providesTags: ["users"]
        })
    })
})

export const { useGetUsersQuery } = usersApi;