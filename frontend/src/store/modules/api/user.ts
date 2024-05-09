import { UserModel } from "@/models/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserPayload = {
    data: {
        sid: string;
        nickname: string;
        given_name: string;
        family_name: string;
        picture: string;
        email: string;    
    }
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
        prepareHeaders: (headers) => headers,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        getUser: builder.query<UserModel, void>({
            query: () => "/api/user",
            transformResponse: (response: UserPayload) => {
                return {
                    sid: response.data.sid,
                    nickname: response.data.nickname,
                    firstName: response.data.given_name,
                    lastName: response.data.family_name,
                    picture: response.data.picture,
                    email: response.data.email
                };
            },

        })
    })
});

export const { useGetUserQuery } = userApi;