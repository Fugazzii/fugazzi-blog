import express, { Express } from "express";
import cors from "cors";
import { PostArticle, DeleteArticle, GetPreviews, GetUserInfo, GetArticleById } from "./article.controller";
import { connectToMongo } from "src/infrastructure/mongo-connection";
import { authMiddleware, verifyAuth } from "./auth.middleware";

export async function prepare(app: Express) {
    await connectToMongo();
    setupMiddlewares(app);
    setupRoutes(app);
}

const setupMiddlewares = (app: Express) => {
    app.use(express.json());
    app.use(cors({
        origin: "http://localhost:3000",
        credentials: true
    }));
    app.use(authMiddleware);
}

const setupRoutes = (app: Express) => {
    app.get("/api/previews", GetPreviews);
    app.get("/api/article/:id", GetArticleById);
    app.post("/api/article", verifyAuth, PostArticle);
    app.delete("/api/article/:id", DeleteArticle);    
    app.get("/api/user", GetUserInfo);
}