import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AdminTab = {
    label: "profile" | "dashboard" | "settings" | "contacts";
}

const initialState: AdminTab = {
    label: "profile"
}

const adminTabSlice = createSlice({
    name: "adminTab",
    initialState,
    reducers: {
        switchTab: (state, action: PayloadAction<AdminTab>) => {
            state = action.payload;
        }
    }
});

export const { switchTab } = adminTabSlice.actions;
export const adminTabReducer = adminTabSlice.reducer;