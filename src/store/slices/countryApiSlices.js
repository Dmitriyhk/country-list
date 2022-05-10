import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getCountresByName: builder.query({
      query: (name) => `name/${name}`,
    }),
  }),
});

export const { useGetCountresByNameQuery } = countryApi;
