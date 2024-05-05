import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticlePreviewModel } from "../../../models/preview";

type PreviewsResponse = { 
    data: ArticlePreviewModel[]
};

type PreviewResponse = {
    data: ArticlePreviewModel
};

export const previewsApi = createApi({
    reducerPath: "previewsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: (builder) => ({
        getAllPreviews: builder.query<ArticlePreviewModel[], string>({
            query: () => "/api/previews",
            transformResponse: (response: PreviewsResponse) => response.data
        }),
        getPreviewById: builder.query<ArticlePreviewModel, string>({
            query: (id) => `/api/previews/${id}`,
            transformResponse: (response: PreviewResponse) => response.data
        })
    })
});

export const { useGetAllPreviewsQuery, useGetPreviewByIdQuery } = previewsApi;