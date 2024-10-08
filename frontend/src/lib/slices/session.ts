import { Session } from "@auth0/nextjs-auth0";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SessionState = { 
    session: Session | null | undefined
};

const initialState: SessionState = { 
    session: null
};
const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSession: (state, action) => {
            state.session = action.payload;
        },
        removeSession: state => {
            state.session = null;
        }
    }
});

export const { setSession, removeSession } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
export const selectSession = (state: RootState) => state.session.session;