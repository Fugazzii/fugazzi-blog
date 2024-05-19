"use client";
import { FC } from "react";
import { useGetAllPreviewsQuery } from "@/store/modules/api/articles";
import Loading from "./loading";
import dynamic from "next/dynamic";

type Props = {
    id?: number
};

const Page: FC<Props> = (_: Props) => {
    const { data: previews, error, isLoading } = useGetAllPreviewsQuery("articlesApi");

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
                <div key={idx} className="w-full flex flex-col justify-around items-center m-16">
                    <ArticlePreview {...preview} />
                </div>
            ))}
        </div>            
    );
};

export default Page;