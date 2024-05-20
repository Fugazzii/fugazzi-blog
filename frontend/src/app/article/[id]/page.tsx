"use client";
import Loading from "@/app/home/loading";
import { useGetArticleByIdQuery } from "@/lib/modules/api/articles";
import md from "markdown-it";

type Props = {
    params: {
        id: string;
    },
    searchParams: object
}

export default function ArticlePage({ params: { id } }: Props ) {
    const { isLoading, data: preview, isFetching, isError } = useGetArticleByIdQuery(id);

    if(isLoading || isFetching || !preview) {
        return <Loading />;
    }

    if(isError) {
        return <>Article Not found</>;
    }

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl mt-10 text-center">{preview.title}</h1>
            <strong className="text-gray-400 text-l">
                {preview.createdAt} 
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                {preview.readDuration} min read 
                &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                <span className="text-white text-xl">@{preview.author}</span>
            </strong>
            <img src={preview.imgUrl} alt="Not Found" className="scale-[90%]"/>
            <div className="prose prose-invert p-10 max-w-[100%] md:scale-[120%] mb-20 md:mt-10" 
                dangerouslySetInnerHTML={{ __html: md().render(preview.content) }}
            />
        </div>
    );
}