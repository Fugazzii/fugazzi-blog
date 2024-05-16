import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import { ArticleRepository, connectToMongo } from "@infrastructure";
import { Article, ArticleService } from "@core";

const PostArticle: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    await connectToMongo();
    const articleRepository = new ArticleRepository();
    const articleService = new ArticleService(articleRepository);

    try {
        const preview = await articleService.post(event.body as Article);
        
        return formatJSONResponse({
            message: "Article posted successfully",
            data: preview
        });
    } catch (error) {
        return formatJSONResponse({
            message: "Failed to post an article",
            error: error.message
        }, 404);
    }
};

export const main = middyfy(PostArticle);