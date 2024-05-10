import { configureStore } from "@reduxjs/toolkit";
import { themeModeReducer } from "./modules/slices/theme-mode";
import { articlesApi } from "./modules/api/articles";
import { userApi } from "./modules/api/user";

export const store = configureStore({
    reducer: {
        themeMode: themeModeReducer,
        articles: articlesApi.reducer,
        user: userApi.reducer,
        [articlesApi.reducerPath]: articlesApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(articlesApi.middleware)
        .concat(userApi.middleware)
});