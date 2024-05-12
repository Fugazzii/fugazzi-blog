"use client";
import { ArticleModel } from "../models/article";
import md from "markdown-it";

type Props = ArticleModel;

const Article = (props: Props) => {
    if(!props) {
        return null;
    }

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl mt-10 text-center">{props.title}</h1>
            <strong className="text-gray-400 text-l">
                {props.createdAt} 
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {props.readDuration} min read 
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                <span className="text-white text-xl">{props.author}</span>
            </strong>
            <img src={props.imgUrl} alt="Not Found" className="scale-[90%]"/>
            <div className="prose prose-invert p-10 max-w-[100%] md:scale-[120%] mb-20 md:mt-10" 
                dangerouslySetInnerHTML={{ __html: md().render(props.content) }}
            />
        </div>
    );
}

export default Article;