import express, { Express } from "express";
import cors from "cors";
import { CreatePreview, DeletePreview, GetPreview, GetPreviews } from "./article.controller";
import { connectToMongo } from "src/infrastructure/mongo-connection";
import { authMiddleware, verifyAuth } from "./auth.middleware";

export async function prepare(app: Express) {
    await connectToMongo();
    setupMiddlewares(app);
    setupRoutes(app);
}

const setupMiddlewares = (app: Express) => {
    app.use(express.json());
    app.use(cors());
    app.use(authMiddleware);
}

const setupRoutes = (app: Express) => {
    app.get("/api/previews", GetPreviews);
    app.get("/api/previews/:id", GetPreview);
    app.post("/api/preview", verifyAuth, CreatePreview);
    app.delete("/api/previews/:id", DeletePreview);
}