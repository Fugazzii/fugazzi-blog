import express, { Express } from "express";
import cors from "cors";
import { CreatePreview, DeletePreview, GetPreview, GetPreviews } from "./article.controller";
import { connectToMongo } from "src/infrastructure/mongo-connection";

export async function prepare(app: Express) {
    await connectToMongo();
    setupMiddlewares(app);
    setupRoutes(app);
}

const setupMiddlewares = (app: Express) => {
    app.use(express.json());
    app.use(cors());    
}

const setupRoutes = (app: Express) => {
    app.get("/api/previews", GetPreviews);
    app.get("/api/previews/:id", GetPreview);
    app.post("/api/preview", CreatePreview);
    app.delete("/api/previews/:id", DeletePreview);
}