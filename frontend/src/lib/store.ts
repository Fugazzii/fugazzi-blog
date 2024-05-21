import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "./api/articles";
import { sessionReducer } from "./slices/session";
import { themeModeReducer } from "./slices/theme-mode";
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