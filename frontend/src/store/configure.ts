import { configureStore } from "@reduxjs/toolkit";
import { themeModeReducer } from "./modules/theme-mode";
import { articlesApi } from "./modules/articles/api";
import { userApi } from "./modules/user/api";

export const makeStore = () => configureStore({
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

export type AppStore = ReturnType<typeof makeStore>;