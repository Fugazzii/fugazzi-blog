import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";
import { ArticleRepository, connectToMongo } from "@infrastructure";
import { ArticleService } from "@core";

const GetArticle: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {
        await connectToMongo();
        const articleRepository = new ArticleRepository();
        const articleService = new ArticleService(articleRepository);
        const { id } = event.queryStringParameters;
        if (!id) {
            throw new Error("Article ID is missing.");
        }
        const article = await articleService.getById(id);
        
        return formatJSONResponse({
            message: "Article fetched successfully",
            data: article
        });
    } catch (error) {
        return formatJSONResponse({
            message: "Failed to get the article",
            error: error.message
        });
    }
};

export const main = middyfy(GetArticle);