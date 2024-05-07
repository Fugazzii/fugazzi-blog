import express from "express";
import { prepare } from "./application/routes";

const app = express();

prepare(app)
    .then(() => console.log("Application is ready"))
    .catch((error) => console.error("Failed to prepare application", error));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
