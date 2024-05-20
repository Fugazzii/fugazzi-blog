import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "./modules/api/articles";
import { sessionReducer } from "./modules/slices/session";
import { themeModeReducer } from "./modules/slices/theme-mode";
import { thunk } from "redux-thunk";

export const makeStore = () => configureStore({
    reducer: {
        themeMode: themeModeReducer,
        session: sessionReducer,
        [articlesApi.reducerPath]: articlesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(thunk)
        .concat(articlesApi.middleware)
})

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"];