import { configureStore } from "@reduxjs/toolkit";
import { themeModeReducer } from "./modules/slices/theme-mode";
import { articlesApi } from "./modules/api/articles";
import { sessionReducer } from "./modules/slices/session";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        themeMode: themeModeReducer,
        session: sessionReducer,
        [articlesApi.reducerPath]: articlesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(thunk)
        .concat(articlesApi.middleware)
});