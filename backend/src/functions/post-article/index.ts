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
                cors: {
                    origin: '*',
                    headers: ['Content-Type', 'Authorization'],
                    allowCredentials: true
                },
                //authorizer: "auth",
                request: {
                    schemas: {
                        "application/json": schema,
                    }
                }
            }
        }
    ]
};
