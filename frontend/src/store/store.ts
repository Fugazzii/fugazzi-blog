import { configureStore } from "@reduxjs/toolkit";
import { themeModeReducer } from "./modules/slices/theme-mode";
import { articlesApi } from "./modules/api/articles";

export const store = configureStore({
    reducer: {
        themeMode: themeModeReducer,
        articles: articlesApi.reducer,
        [articlesApi.reducerPath]: articlesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(articlesApi.middleware)
});