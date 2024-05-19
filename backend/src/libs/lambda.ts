import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import httpEventNormalizer from "@middy/http-event-normalizer";
import cors from "@middy/http-cors";

export const middyfy = (handler) => {
  return middy(handler)
    .use(middyJsonBodyParser())
    .use(httpEventNormalizer())
    .use(cors({
        origin: "http://localhost:3000",
        headers: "*",
        methods: "*",
        credentials: true
    }))
}
