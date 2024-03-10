import { FC, useState } from "react";
import { Preview, PreviewProps } from "./Preview";

type PageProps = {
    id?: number
};

export const Page: FC<PageProps> = ({ id }: PageProps) => {
    // let x = location.pathname.split("/");
    // console.log(x[x.length - 1]);
    
    const [previews, setPreviews] = useState<PreviewProps[]>(
        [
            {
              title: "Lorem Ipsum",
              date: "2024-03-10",
              readDuration: 5,
              imgUrl: "https://nakamoto.com/content/images/size/w960/2020/01/introduction-to-cryptocurrency.png",
              author: "John Doe",
              description: "A brief description of the first preview.",
            },
            {
              title: "Dolor Sit Amet",
              date: "2024-03-11",
              readDuration: 8,
              imgUrl: "https://nakamoto.com/content/images/size/w750/2020/01/what-are-the-key-properties-of-bitcoin.png",
              author: "Jane Smith",
              description: "A brief description of the second preview.",
            }
        ]
    );

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {previews.map((preview, idx) => <Preview key={idx} {...preview} />)}
        </div>
    );
};