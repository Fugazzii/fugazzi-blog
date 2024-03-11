import { configureStore } from "@reduxjs/toolkit";
import { themeModeReducer } from "./modules/theme-mode";

export const store = configureStore({
    reducer: {
        themeMode: themeModeReducer
    }
});