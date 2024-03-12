import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticlePreviewModel } from "../../../models/preview";

type PreviewsResponse = { 
    data: ArticlePreviewModel[]
};

export const previewsApi = createApi({
    reducerPath: "previewsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getAllPreviews: builder.query<ArticlePreviewModel[], string>({
            query: () => "/api/previews",
            transformResponse: (response: PreviewsResponse) => response.data
        })
    })
});

export const { useGetAllPreviewsQuery } = previewsApi;