import { handlerPath } from "@libs/handler-resolver";
import { corsConfig } from "src/cors";

export default {
    handler: `${handlerPath(__dirname)}/handler.auth`,
    timeout: 30,
    events: [
        {
            http: {
                method: "post",
                path: "/auth",
                cors: corsConfig
            }
        }
    ]
};
