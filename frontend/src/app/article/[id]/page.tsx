"use client";
import Loading from "@/app/home/loading";
import Article from "@/components/Article";
import { useGetPreviewByIdQuery } from "@/store/modules/previews/api";

type Props = {
    params: {
        id: string;
    },
    searchParams: object
}

export default function ArticlePage ({ params: { id } }: Props ) {
    const { isLoading, data: preview } = useGetPreviewByIdQuery(id);
    console.log(preview);   
    if(isLoading) {
        <Loading />;
    }

    if(!preview) {
        return <div>Article not found</div>;
    }
    const p = {
        ...preview,
        content: "",
        links: [""]
    };

    return (
        <Article {...p} />
    );
}