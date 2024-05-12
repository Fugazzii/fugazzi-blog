import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import { ArticleRepository } from "@infrastructure";
import { ArticleService } from "@core";

const GetPreviews: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    const articleRepository = new ArticleRepository();
    const articleService = new ArticleService(articleRepository);

    try {
        const data = await articleService.getAll({
            limit: event.body.limit,
            offset: event.body.page
        });

        return formatJSONResponse({
            message: `GetPreviews ${event.body.name}, welcome to the exciting Serverless world!`,
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