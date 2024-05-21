import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ThemeModeState = { 
    isDarkMode: boolean
};

const initialState: ThemeModeState = { 
    isDarkMode: false
};

const themeModeSlice = createSlice({
    name: "themeMode",
    initialState,
    reducers: {
        toggleThemeMode: state => {
            state.isDarkMode = !state.isDarkMode;
        }
    }
});

export const { toggleThemeMode } = themeModeSlice.actions;
export const themeModeReducer = themeModeSlice.reducer;
export const selectSession = (state: RootState) => state.session.session;