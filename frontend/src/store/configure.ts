import { configureStore } from "@reduxjs/toolkit";
import { themeModeReducer } from "./modules/theme-mode";
import { previewsApi } from "./modules/previews/api";
import { previewsReducer } from "./modules/previews/slice";

export const makeStore = () => configureStore({
    reducer: {
        themeMode: themeModeReducer,
        previews: previewsReducer,
        [previewsApi.reducerPath]: previewsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(previewsApi.middleware)
});

export type AppStore = ReturnType<typeof makeStore>;