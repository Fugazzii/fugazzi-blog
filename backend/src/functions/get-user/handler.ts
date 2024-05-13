import { APIGatewayProxyEvent } from "aws-lambda";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

const GetUserInfo = async (event: APIGatewayProxyEvent) => {
    try {
        const user = event.requestContext.authorizer?.claims;

        if (!user) {
            throw new Error("Unauthenticated");
        }

        return formatJSONResponse({
            success: true,
            message: "User info fetched successfully",
            data: user
        });
    } catch (error) {
        return formatJSONResponse({
            success: false,
            message: "Failed to get user info",
            error: error.message
        });
    }
};

export const main = middyfy(GetUserInfo);
