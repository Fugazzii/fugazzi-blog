import { handlerPath } from "@libs/handler-resolver";

export default {
    handler: `${handlerPath(__dirname)}/handler.ping`,
    timeout: 30,
    events: [
        {
            http: {
                method: "get",
                path: "/ping",
                cors: {
                    origin: "*",
                    headers: ["Content-Type", "Authorization"],
                    allowCredentials: true
                }
            }
        }
    ]
};
