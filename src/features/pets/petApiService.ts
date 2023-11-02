import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const petApi = createApi({
  reducerPath: "petApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getPetByID: builder.query({
      query: (id) => ({ url: "pets", params: { id } }),
      transformResponse: (response) => response.pets[0],
      transformResponse: (response) => response.pets[0],
    }),
    getSearchParams: builder.query({
      query: ({ animal, location, breed }) => ({
        url: "pets",
        params: { animal, location, breed },
      }),
      transformResponse: (response) => response.pets,
    }),
    getBreedList: builder.query({
      query: (animal) => ({ url: "breeds", params: { animal } }),
      transformResponse: (response) => response.breeds,
    }),
  }),
});

export const {useGetPetByIDQuery, useGetSearchParamsQuery, useGetBreedListQuery} = petApi ; 