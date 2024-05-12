"use client";
import Loading from "@/app/home/loading";
import Article from "@/components/Article";
import { useGetArticleByIdQuery } from "@/store/modules/api/articles";

type Props = {
    params: {
        id: string;
    },
    searchParams: object
}

export default function ArticlePage ({ params: { id } }: Props ) {
    const { isLoading, data: preview } = useGetArticleByIdQuery(id);

    if(isLoading) {
        <Loading />;
    }

    if(!preview) {
        return <>Article Not found</>;
    }

    return (
        <Article {...preview} />
    );
}