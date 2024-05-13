import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    timeout: 30,
    events: [
        {
            http: {
                method: "post",
                path: "/article",
                cors: true,
                request: {
                    schemas: {
                        "application/json": schema,
                    }
                }
            }
        }
    ]
};
