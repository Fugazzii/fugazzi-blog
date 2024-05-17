//import schema from "./schema";
import { handlerPath } from "@libs/handler-resolver";

export default {
    handler: `${handlerPath(__dirname)}/handler.get_previews`,
    timeout: 30,
    events: [
        {
            http: {
                method: "get",
                path: "/previews",
                cors: true
            }
        }
    ]
};
