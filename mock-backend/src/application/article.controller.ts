import { Request, Response } from "express";
import { ArticleService } from "@core";
import { ArticleRepository } from "@infrastructure";

const articleRepository = new ArticleRepository();
const articleService = new ArticleService(articleRepository);

const GetPreviews = async (req: Request, res: Response) => {
    try {
        const { page, limit } = req.body;
        const previews = await articleService.getAll({ limit, offset: (page - 1) * limit });
        
        res.json({
            success: true,
            message: "Previews fetched successfully",
            data: previews
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to get previews",
            error: error.message
        });
    }
}

const GetArticleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const preview = await articleService.getById(id);
        
        res.json({
            success: true,
            message: "Preview fetched successfully",
            data: preview
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to get preview",
            error: error.message
        });
    }
}

const PostArticle = async (req: Request, res: Response) => {
    try {
        const preview = await articleService.post(req.body);
        
        res.json({
            success: true,
            message: "Preview created successfully",
            data: preview
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to create preview",
            error: error.message
        });
    }
}

const DeleteArticle = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await articleService.delete(id);
        
        res.json({
            success: true,
            message: "Preview deleted successfully"
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to delete preview",
            error: error.message
        });
    }
}

const DeleteAll = async (req: Request, res: Response) => {
    try {
        await articleService.deleteAll();
        
        res.json({
            success: true,
            message: "Previews deleted successfully"
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to delete previews",
            error: error.message
        });
    }
}

const GetUserInfo = (req: Request, res: Response) => {
    try {
        if(!req.oidc.user) {
            throw new Error("Unauthenticated");
        }

        res.json({
            success: true,
            message: "User info fetched successfully",
            data: req.oidc.user
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to get user info",
            error: error.message
        });
    }
}

export { 
    GetPreviews,
    GetArticleById,
    PostArticle, 
    DeleteArticle, 
    GetUserInfo, 
    DeleteAll
};