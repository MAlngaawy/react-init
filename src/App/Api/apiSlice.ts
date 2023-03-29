import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: ({ query, mutation }) => ({
    getTodos: query<
      { completed: boolean; id: number; title: string; userId: number }[],
      {}
    >({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = apiSlice;
