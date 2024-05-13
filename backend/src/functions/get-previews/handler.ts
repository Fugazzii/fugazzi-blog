import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import { ArticleRepository, connectToMongo } from "@infrastructure";
import { ArticleService } from "@core";

const GetPreviews: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    try {
        await connectToMongo();
        const articleRepository = new ArticleRepository();
        const articleService = new ArticleService(articleRepository);    
        const data = await articleService.getAll({
            limit: event.body.limit,
            offset: (event.body.page - 1) * event.body.limit
        });

        return formatJSONResponse({
            message: `Successfully retrieved articles`,
            event,
            data
        });
    } catch (error) {
        return formatJSONResponse({
            message: error.message,
            event
        });
    }
};

export const main = middyfy(GetPreviews);