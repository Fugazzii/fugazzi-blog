export default {
    type: "object",
    properties: {
        limit: { type: "number" },
        page: { type: "number" }
    },
    required: ["limit", "page"]
} as const;
  