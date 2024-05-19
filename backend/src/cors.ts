export const corsConfig = {
    origin: "http://localhost:3000",
    headers: ["Content-Type", "Authorization", "X-Amz-Date", "X-Api-Key", "X-Amz-Security-Token", "X-Amz-User-Agent"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowCredentials: true
};