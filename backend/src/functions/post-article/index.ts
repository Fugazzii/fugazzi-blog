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
                authorizer: "Auth"
            }
        }
    ]
};
