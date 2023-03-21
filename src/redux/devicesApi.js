import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const devicesApi = createApi({
  reducerPath: "devicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (build) => ({
    getDevices: build.query({
      query: () => "devices",
      providesTags: ["devices"],
    }),
  }),
});

export const { useGetDevicesQuery } = devicesApi;
