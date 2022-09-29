import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shazamCoreApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
  "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
};

const baseUrl = "https://shazam-core.p.rapidapi.com/v1";

const createRequest = (url) => ({ url, headers: shazamCoreApiHeaders });

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => createRequest("/charts/world"),
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
