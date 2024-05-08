import { createSlice } from "@reduxjs/toolkit";
import { ArticlePreviewModel } from "../../../models/preview";

type PreviewState = {
    previews: ArticlePreviewModel[],
    loading: boolean,
    error: string | null
};

const initialState: PreviewState = {
    previews: [],
    loading: false,
    error: null
};

const previewsSlice = createSlice({
    name: "previews",
    initialState,
    reducers: {
        previewsRequested: (state) => {
            state.loading = true;
        },
        previewsReceived: (state, action) => {
            state.previews = action.payload;
            state.loading = false;
            state.error = null;
        },
        previewsRequestFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { previewsRequested, previewsReceived, previewsRequestFailed } = previewsSlice.actions;
export const previewsReducer = previewsSlice.reducer;