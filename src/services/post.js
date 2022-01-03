import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        console.log("Post Id: ", id);
        return {
          url: `/posts/${id}`,
          method: "GET",
        };
      },
    }),
    // posts?_limit=5
    getPostByLimit: builder.query({
      query: (num) => {
        console.log("Post Limit: ", num);
        return {
          url: `/posts?_limit=${num}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
} = postApi;
