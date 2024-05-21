"use client";
import type { FC } from "react";
import { ArticlePreviewModel } from "../models/preview";
import Link from "next/link";
import Image from "next/image";
import DeleteButton from "./DeleteButton";
import type { UserProfile } from "@auth0/nextjs-auth0/client";

type Props = ArticlePreviewModel & {
    user: UserProfile | null;
    deleteArticle: (id: string) => Promise<void>;
};

const ArticlePreview: FC<Props> = (props: Props) => {
    return (
        <div className="w-full h-full flex flex-col justify-around items-center m-16">
            <div className="w-4/5 h-[25vh] md:h-[50vh]">
                <Image className="object-cover" src={props.imgUrl} alt="..." layout="fill" />
            </div>
            <div className="w-2/3">
                <h3 className="text-white font-bold text-3xl mt-6 mb-2">{props.title}</h3>
                <p className="flex flex-row text-white mb-4">
                    <span className="text-sm text-gray-500 font-bold">{props.createdAt}&nbsp;-&nbsp;</span>
                    <span className="text-sm text-gray-500 font-bold">{props.readDuration} min read&nbsp;-&nbsp;</span>
                    <span className="text-sm text-white font-bold">@{props.author}</span>
                </p>
                <p className="text-white mt-2 text-zinc-300 text-base">{props.description}</p>
                <hr className="w-full h-[2px] mt-4 mb-4 bg-gray-100 border-0 rounded dark:bg-gray-700" />
                <Link href={`/article/${props.id}`} className="text-white font-bold text-xl cursor-pointer">Read Now</Link>
                <DeleteButton id={props.id ?? ""} deleteArticle={props.deleteArticle} user={props.user} />
            </div>
        </div>
    );
}

export default ArticlePreview;