"use client";
import { ArticleModel } from "../models/article";

type Props = ArticleModel;

const Article = (props: Props | null) => {
    
    if(!props) {
        return null;
    }

    return (
        <>{props.author}</>
    );
}

export default Article;