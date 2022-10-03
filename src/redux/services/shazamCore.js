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
    getSongsByGenre: builder.query({
      query: (genre) =>
        createRequest(`/charts/genre-world?genre_code=${genre}`),
    }),
    getSongDetails: builder.query({
      query: ({ songid }) =>
        createRequest(`/tracks/details?track_id=${songid}`),
    }),
    getSongRelated: builder.query({
      query: ({ songid }) =>
        createRequest(`/tracks/related?track_id=${songid}`),
    }),
    getArtistDetails: builder.query({
      query: (artistId) =>
        createRequest(`/artists/details?artist_id=${artistId}`),
    }),
    getSongsByCountry: builder.query({
      query: (countryCode) =>
        createRequest(`/charts/country?country_code=${countryCode}`),
    }),
    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        createRequest(
          `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`
        ),
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
