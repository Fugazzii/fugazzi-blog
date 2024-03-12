import { FC } from "react";
import { ArticlePreview } from "./Preview";
import { useGetAllPreviewsQuery } from "../store/modules/previews/api";

type Props = {
    id?: number
};

export const Page: FC<Props> = (_: Props) => {
    const { data: previews, isLoading, error } = useGetAllPreviewsQuery("previewsApi");

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {previews && previews.map((preview, idx) => <ArticlePreview key={idx} {...preview} />)}
        </div>
    );
};
