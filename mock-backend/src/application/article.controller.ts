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

const GetPreview = async (req: Request, res: Response) => {
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

const CreatePreview = async (req: Request, res: Response) => {
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

const DeletePreview = async (req: Request, res: Response) => {
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

export { GetPreviews, GetPreview, CreatePreview, DeletePreview };