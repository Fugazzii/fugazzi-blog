export default {
    type: "object",
    properties: {
        title: { type: "string" },
        readDuration: { type: "number" },
        imgUrl: { type: "string" },
        author: { type: "string" },
        authorProfileImgUrl: { type: "string" },
        description: { type: "string" },
        content: { type: "string" },
        links: { type: "array", items: { type: "string" } },
        createdAt: { type: "string" }
    },
    required: ["title", "readDuration", "imgUrl", "author", "authorProfileImgUrl", "description", "content", "createdAt"]
} as const;