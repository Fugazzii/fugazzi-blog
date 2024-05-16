import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

const Ping = () => formatJSONResponse({ message: "Pong! Lambda is up and running!" });

export const ping = middyfy(Ping);