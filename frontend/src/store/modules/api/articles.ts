import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticlePreviewModel } from "../../../models/preview";
import { ArticleModel } from "@/models/article";

export const articlesApi = createApi({
    reducerPath: "articlesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: (builder) => ({
        getAllPreviews: builder.query<ArticlePreviewModel[], string>({
            query: () => "/api/previews",
            transformResponse: (response: { data: ArticlePreviewModel[] }) => {
                response.data = response.data.map(art => ({
                    ...art,
                    id: art._id
                }));
                return response.data;
            }
        }),
        getArticleById: builder.query<ArticleModel, string>({
            query: (id) => `/api/article/${id}`,
            transformResponse: (response: { data: ArticleModel }) => {
                response.data.id = response.data._id;
                return response.data;
            }
        }),
        createArticle: builder.mutation<ArticleModel, string>({
            query: (data) => ({
                url: "/api/article",
                method: "POST",
                body: data
            }),
            transformResponse: (response: { data: ArticleModel }) => {
                response.data.id = response.data._id;
                return response.data;
            }
        })
    })
});

export const { useGetAllPreviewsQuery, useGetArticleByIdQuery, useCreateArticleMutation } = articlesApi;