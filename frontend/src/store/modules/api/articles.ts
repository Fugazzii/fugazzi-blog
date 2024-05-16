import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticlePreviewModel } from "../../../models/preview";
import { ArticleModel } from "@/models/article";
import { getSession } from "@auth0/nextjs-auth0";
/* const session = await getSession();
if (session) {
    headers.set("Authorization", `Bearer ${session.accessToken}`);
}
return headers; */


const formatDate = (date: string) => new Date(date).toLocaleDateString().replaceAll("/", "-");

export const articlesApi = createApi({
    reducerPath: "articlesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.SERVER_URL,
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
        }
        //credentials: "include"
    }),
    endpoints: (builder) => ({
        getAllPreviews: builder.query<ArticlePreviewModel[], string>({
            query: () => ({
                url: "/previews",
                method: "GET"
            }),
            transformResponse: (response: { data: ArticlePreviewModel[] }) => {
                response.data = response.data.map(art => ({
                    ...art,
                    createdAt: formatDate(art.createdAt as string),
                    id: art._id
                }));
                return response.data;
            }
        }),
        getArticleById: builder.query<ArticleModel, string>({
            query: (id) => `/article/${id}`,
            transformResponse: (response: { data: ArticleModel }) => {
                response.data = {
                    ...response.data,
                    createdAt: formatDate(response.data.createdAt as string),
                    id: response.data._id
                };
                return response.data;
            }
        }),
        createArticle: builder.mutation<ArticleModel, ArticleModel>({
            query: (data: ArticleModel) => ({
                    url: "/article",
                    method: "POST",
                    body: data    
            }),
            transformResponse: (response: { data: ArticleModel }) => response.data
        })
    })
});

export const { useGetAllPreviewsQuery, useGetArticleByIdQuery, useCreateArticleMutation } = articlesApi;