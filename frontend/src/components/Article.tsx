"use client";
import { ArticleModel } from "../models/article";
import { renderToString } from "react-dom/server";
import Md from "./Md";
import Markdown from "react-markdown";

type Props = ArticleModel;

const Article = (props: Props | null) => {
    
    if(!props) {
        return null;
    }

    return (
        <>
            <h1 className="text-white font-bold text-3xl mt-6 mb-2 text-center">{props.title}</h1>
            <strong className="text-gray-400 text-l">
                {new Date(props.date).toDateString().slice(4)} 
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {props.readDuration} min read 
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                <span className="text-white text-xl">{props.author}</span>
            </strong>
            <img src={props.imgUrl} alt="Not Found" />
            <Md content={props.content} />
        </>
    );
}

export default Article;