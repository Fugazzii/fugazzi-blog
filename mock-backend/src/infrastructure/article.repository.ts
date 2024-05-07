import { Article, IArticleRepository, PaginationOpts } from "@core";
import { ArticleModel } from "./article.model";

export class ArticleRepository implements IArticleRepository{

    private articlesRepository: typeof ArticleModel;

    public constructor() {
        this.articlesRepository = ArticleModel;
    }

    public create(article: Article): Promise<Article> {
        return this.articlesRepository.create(article);        
    }

    public update(article: Article): Promise<Article> {
        return this.articlesRepository.findByIdAndUpdate(article.id, article, { new: false });
    }

    public delete(id: string): Promise<void> {
        return this.articlesRepository.findByIdAndDelete(id);
    }
    public findOne(id: string): Promise<Article> {
        return this.articlesRepository.findById(id);
    }
    public findAll(opts: PaginationOpts): Promise<Article[]> {
        return this.articlesRepository.find().skip(opts.offset).limit(opts.limit);
    }
}