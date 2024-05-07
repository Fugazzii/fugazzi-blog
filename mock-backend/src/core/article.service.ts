import { Article } from "./article";
import { IArticleRepository, PaginationOpts } from "./article.repository.interface";

export class ArticleService {
    public constructor(private readonly articleRepository: IArticleRepository) {
        this.articleRepository = articleRepository;
    }
    
    public post(article: Article) {
        return this.articleRepository.create(article);
    }
    
    public edit(article: Article) {
        return this.articleRepository.update(article);
    }
    
    public delete(id: string) {
        return this.articleRepository.delete(id);
    }
    
    public getById(id: string) {
        return this.articleRepository.findOne(id);
    }
    
    public getAll(opts: PaginationOpts) {
        return this.articleRepository.findAll(opts);
    }
}