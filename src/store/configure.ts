import { configureStore } from "@reduxjs/toolkit";
import { themeModeReducer } from "./modules/theme-mode";
import { previewsApi } from "./modules/previews/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { previewsReducer } from "./modules/previews/slice";

export const store = configureStore({
    reducer: {
        themeMode: themeModeReducer,
        previews: previewsReducer,
        [previewsApi.reducerPath]: previewsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(previewsApi.middleware)
});

setupListeners(store.dispatch);