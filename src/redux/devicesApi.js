import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const devicesApi = createApi({
  reducerPath: "devicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ['desktop'],
  endpoints: (build) => ({
    // getDevices: build.query({
    //   query: () => "devices",
    //   providesTags: ["devices"],
    // }),
    getDesktops: build.query({
      query: () => "/desktops",
      providesTags: ["desktops"],
    }),
    addDesktop: build.mutation({
      query: (body) => ({
        url: "/desktops",
        method: "POST",
        body,
      }),
      invalidatesTags: ["desktops"],
    }),
  }),
});

export const { useGetDesktopsQuery, useAddDesktopMutation } = devicesApi;
