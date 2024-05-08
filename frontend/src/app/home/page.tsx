"use client";
import { FC } from "react";
import { ArticlePreview } from "@/components/Preview";
import { useGetAllPreviewsQuery } from "@/store/modules/articles/api";
import Loading from "./loading";

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

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {error && <p>Error</p>}
            {previews && previews.map((preview, idx) => <ArticlePreview key={idx} {...preview} />)}
        </div>            
    );
};

export default Page;