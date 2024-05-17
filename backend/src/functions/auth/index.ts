import { handlerPath } from "@libs/handler-resolver";

export default {
    handler: `${handlerPath(__dirname)}/handler.auth`,
    timeout: 30,
    events: [
        {
            http: {
                method: "post",
                path: "/auth",
                cors: true
            }
        }
    ]
};
