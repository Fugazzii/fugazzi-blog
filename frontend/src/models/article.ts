import { ArticlePreviewModel } from "./preview";

export type ArticleModel = ArticlePreviewModel & {
    content: string;
    links: string[];
}