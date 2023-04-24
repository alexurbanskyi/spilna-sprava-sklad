import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chairsApi = createApi({
  reducerPath: "chairApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["chairs"],
  endpoints: (build) => ({
    getChairs: build.query({
      query: () => "/chairs",
      providesTags: ["chairs"],
    }),
    addChairs: build.mutation({
      query: (body) => ({
        url: "/chairs",
        method: "POST",
        body,
      }),
      invalidatesTags: ["chairs"],
    }),
    deleteChair: build.mutation({
      query: (id) => ({
        url: `/chairs/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["chairs"],
    }),
    updateChairMaster: build.mutation({
      query: (chair) => ({
        url: `/chairs/${chair.id}`,
        method: "PATCH",
        body: chair,
      }),
      invalidatesTags: ["chairs"],
    }),
  }),
});

export const { useGetChairsQuery, useAddChairsMutation, useDeleteChairMutation, useUpdateChairMasterMutation} = chairsApi;


