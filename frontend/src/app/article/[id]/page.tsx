"use client";
import Loading from "@/app/home/loading";
import Article from "@/components/Article";
import { useGetArticleByIdQuery } from "@/store/modules/previews/api";

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
        return <div>Article not found</div>;
    }

    return (
        <Article {...preview} />
    );
}