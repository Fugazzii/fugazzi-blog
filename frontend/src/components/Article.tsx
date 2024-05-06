"use client";
import { ArticleModel } from "../models/article";
import md from "markdown-it";

type Props = {
    data: ArticleModel
};

const Article = ({ data: props }: Props) => {
    if(!props) {
        return null;
    }

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl mt-6 mb-2 text-center">{props.title}</h1>
            <strong className="text-gray-400 text-l">
                {new Date(props.date).toDateString().slice(4)} 
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {props.readDuration} min read 
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                <span className="text-white text-xl">{props.author}</span>
            </strong>
            <img src={props.imgUrl} alt="Not Found" />
            <div className="prose prose-invert p-10 max-w-[100%] md:scale-[110%] mb-10 md:mt-10" 
                dangerouslySetInnerHTML={{ __html: md().render(props.content) }}
            />
        </div>
    );
}

export default Article;