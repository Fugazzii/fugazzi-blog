import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticlePreviewModel } from "../../../models/preview";
import { ArticleModel } from "@/models/article";

type PreviewsResponse = { 
    data: ArticlePreviewModel[]
};

type ArticleByIdResponse = {
    data: ArticleModel
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
        getArticleById: builder.query<ArticleModel, string>({
            query: (id) => `/api/previews/${id}`,
            transformResponse: (response: ArticleByIdResponse) => response.data
        })
    })
});

export const { useGetAllPreviewsQuery, useGetArticleByIdQuery } = previewsApi;