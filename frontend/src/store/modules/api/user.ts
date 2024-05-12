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
    },
    success: boolean,
    message: string
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.SERVER_URL,
        prepareHeaders: (headers) => headers,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        getUser: builder.query<UserModel | null, void>({
            query: () => "/api/user",
            transformResponse: (response: UserPayload): UserModel | null => {
                if (!response.success) {
                    return null;
                }

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