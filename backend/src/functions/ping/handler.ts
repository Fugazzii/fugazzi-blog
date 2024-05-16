import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import schema from "./schema";

const Ping: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
    return formatJSONResponse({ message: `Pong! Lambda is up, ${event.queryStringParameters.name}` })
}

export const ping = middyfy(Ping);