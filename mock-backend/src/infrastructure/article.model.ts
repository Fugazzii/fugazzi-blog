import { Schema, Types, model } from "mongoose";
import { Article } from "../core/article";

const ArticleSchema = new Schema<Article>({
    title: { type: String, required: true },
    readDuration: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    author: { type: String, required: true },
    authorProfileImgUrl: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    links: { type: Types.Array<String>, required: true },
    createdAt: { type: Date, default: new Date() }
});

export const ArticleModel = model<Article>("Article", ArticleSchema);