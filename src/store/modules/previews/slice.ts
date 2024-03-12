import { createSlice } from "@reduxjs/toolkit";
import { ArticlePreviewModel } from "../../../models/preview";

type PreviewState = {
    previews: ArticlePreviewModel[],
    isLoading: boolean,
    error: string | null
};

const initialState: PreviewState = {
    previews: [],
    isLoading: false,
    error: null
};

const previewsSlice = createSlice({
    name: "previews",
    initialState,
    reducers: {
        previewsRequested: (state) => {
            state.isLoading = true;
        },
        previewsReceived: (state, action) => {
            state.previews = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        previewsRequestFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const { previewsRequested, previewsReceived, previewsRequestFailed } = previewsSlice.actions;
export const previewsReducer = previewsSlice.reducer;