import { ArticleModel } from "../models/article";

type Props = ArticleModel;

export const Article = (props: Props) => {
    return (
        <>{props.author}</>
    );
}