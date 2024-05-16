import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    timeout: 30,
    events: [
        {
            http: {
                method: "delete",
                path: "/article/{id}",
                cors: {
                    origin: '*',
                    headers: ['Content-Type', 'Authorization'],
                    allowCredentials: true
                },
                request: {
                    schemas: {
                        "application/json": schema,
                    }
                }
            }
        }
    ]
};
