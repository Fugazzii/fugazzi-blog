import { handlerPath } from "@libs/handler-resolver";
import { corsConfig } from "src/cors";

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    timeout: 30,
    events: [
        {
            http: {
                method: "delete",
                path: "/article",
                cors: corsConfig
            }
        }
    ]
};
