import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://64883ed00e2469c038fd53a7.mockapi.io';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.guery({
      query: () => API_ENDPOINT,
      providesTags: ['Comments'],
    })
  }),
    addComment: builder.mutation({
    query: (comment) => ({
      url: API_ENDPOINT,
      method: 'POST',
      body: comment
    }),
    ivalidatesTags: ['Comments']
  }),
    updateCommentCount: builder.mutation({
    query: ({id, ...body}) => ({
      url: `${API_ENDPOINT}/${id}`,
method: 'PUT',
body
    }),
    ivalidatesTags: ['Comments']
  })
});


export const {useGetCommentsQuery, useAddCommentMutation, useUpdateCommentCountMutation} = commentApi;
