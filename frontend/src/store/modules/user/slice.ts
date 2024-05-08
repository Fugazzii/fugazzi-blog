import { UserModel } from "@/models/user";
import { createSlice } from "@reduxjs/toolkit";

type UserState = {
    data: UserModel,
    loading: boolean,
    error: string | null
};

const initialState: UserState = {
    data: {
        sid: "",
        name: "",
        picture: "",
        email: ""
    },
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userReceived: (state, action) => {
            state.data.sid = action.payload.sid;
            state.data.name = action.payload.name;
            state.data.picture = action.payload.picture;
            state.data.email = action.payload.email;
        },
        userCleared: (state) => {
            state.data.sid = "";
            state.data.name = "";
            state.data.picture = "";
            state.data.email = "";
        }
    }
});

export const { userReceived, userCleared } = userSlice.actions;
export const userReducer = userSlice.reducer;