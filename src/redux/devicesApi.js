import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const devicesApi = createApi({
  reducerPath: "devicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["desktop", "monitors"],
  endpoints: (build) => ({
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
    getMonitors: build.query({
      query: () => "/monitors",
      providesTags: ["monitors"],
    }),

    addMonitor: build.mutation({
      query: (body) => ({
        url: "/monitors",
        method: "POST",
        body,
      }),
      invalidatesTags: ["monitors"],
    }),
    deleteMonitor: build.mutation({
      query: (id) => ({
        url: `/monitors/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["monitors"],
    }),
    updateMonitorMaster: build.mutation({
      query: (monitor) => ({
        url: `/monitors/${monitor.id}`,
        method: "PATCH",
        body: monitor,
      }),
      invalidatesTags: ["monitors"],
    }),
    
  }),
});

export const {
  useGetDesktopsQuery,
  useAddDesktopMutation,
  useGetMonitorsQuery,
  useAddMonitorMutation,
  useDeleteMonitorMutation,
  useUpdateMonitorMasterMutation,
} = devicesApi;
