import { FC, useState } from "react";
import { ArticlePreviewModel } from "../models/preview";
import { ArticlePreview } from "./Preview";

type Props = {
    id?: number
};

export const Page: FC<Props> = ({ id }: Props) => {
    // let x = location.pathname.split("/");
    // console.log(x[x.length - 1]);
    
    const [previews, setPreviews] = useState<ArticlePreviewModel[]>([]);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {previews.map((preview, idx) => <ArticlePreview key={idx} {...preview} />)}
        </div>
    );
};