import { Article } from "./article";

export type PaginationOpts = {
    limit: number;
    offset: number;
};

export interface IArticleRepository {
    create(article: Article): Promise<Article>;
    update(article: Article): Promise<Article>;
    delete(id: string): Promise<void>;
    findOne(id: string): Promise<Article | null>;
    findAll(opts: PaginationOpts): Promise<Article[]>;
}