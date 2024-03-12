import { createAsyncThunk } from "@reduxjs/toolkit";
import { previewsApi } from "./api";

export const fetchPreviews = createAsyncThunk(
    "previews/fetchPreviews",
    () => previewsApi.endpoints.getAllPreviews.initiate("")
);