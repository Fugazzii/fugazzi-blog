import { UserModel } from "@/models/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080"
    }),
    endpoints: (builder) => ({
        getUser: builder.query<UserModel, void>({
            query: () => "/api/user",
            transformResponse: (response: { data: UserModel }) => {
                console.log(response);
                return response.data;
            }
        })
    })
});

export const { useGetUserQuery } = userApi;