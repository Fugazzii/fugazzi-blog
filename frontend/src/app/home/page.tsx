"use client";
import { FC } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
import { useDeleteArticleMutation, useGetAllPreviewsQuery } from "@/lib/api/articles";

type Props = {
    id?: number
};

const Page: FC<Props> = (_: Props) => {
    const { data: previews, error, isLoading } = useGetAllPreviewsQuery("articlesApi");
    const [deleteArticle] = useDeleteArticleMutation();

    if(isLoading) {
        return <Loading />;
    }

    if(!!error) {
        return <p>Failed to retrieve</p>;
    }

    const ArticlePreview = dynamic(() => import("@/components/ArticlePreview"), {
        loading: () => <Loading />,
        ssr: false
    });

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {error && <p>Error</p>}
            {previews && previews.map((preview, idx) => (
                <div key={idx} className="w-full h-full flex flex-col justify-around items-center m-16">
                    <ArticlePreview {...{ deleteArticle, ...preview }} />
                </div>
            ))}
        </div>            
    );
};

export default Page;