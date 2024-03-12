import { FC } from "react";
import { ArticlePreviewModel } from "../models/preview";

type Props = ArticlePreviewModel;

export const ArticlePreview: FC<Props> = (props: Props) => {
    return (
        <div className="w-full flex flex-col justify-around items-center m-16">
            <img 
                className="w-4/5"
                src={props.imgUrl}
                alt="..." />
            <div className="w-2/3">
                <h3 className="text-white font-bold text-3xl mt-6 mb-2">{props.title}</h3>
                <p className="flex flex-row text-white mb-4">
                    <span className="text-sm text-gray-500 font-bold">{props.date}&nbsp;-&nbsp;</span>
                    <span className="text-sm text-gray-500 font-bold">{props.readDuration}&nbsp;-&nbsp;</span>
                    <span className="text-sm text-white font-bold">{props.author}</span>
                </p>
                <p className="text-white mt-2 text-zinc-300 text-base">{props.description}</p>
                <hr className="w-full h-[2px] mt-4 mb-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
                <p className="text-white font-bold text-xl cursor-pointer   ">Read Now</p>
            </div>
        </div>
    );
} 