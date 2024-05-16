import { handlerPath } from "@libs/handler-resolver";

export default {
    handler: `${handlerPath(__dirname)}/handler.main`,
    timeout: 30,
    events: [
        {
            http: {
                method: "post",
                path: "/auth",
                cors: true,
                request: {
                    schemas: {
                        "application/json": {
                            type: "object"
                        },
                    }
                }
            }
        }
    ]
};
