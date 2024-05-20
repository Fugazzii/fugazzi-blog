"use client";
import Input from "@/components/Input";
import MdEditor from "@/components/MarkdownEditor";
import Textarea from "@/components/Textarea";
import { useCreateArticleMutation } from "@/lib/modules/api/articles";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useState } from "react";

const DashboardPage = () =>{
    const { user } = useUser();
    
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [createArticle] = useCreateArticleMutation();

    const calculateReadDuration = (contentLength: number) => {
        const wordsPerMinute = 200;
        const minutes = contentLength / wordsPerMinute;
        return Math.ceil(minutes);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await createArticle({
            title,
            content,
            links: [],
            readDuration: calculateReadDuration(content.length),
            createdAt: new Date().toString(),
            description,
            author: user!.nickname ?? "unknown",
            imgUrl: "https://nakamoto.com/content/images/size/w960/2020/01/introduction-to-cryptocurrency.png",
            authorProfileImgUrl: user!.picture ?? "404"
        });

        alert("Article posted successfully");
    }

    return (
        <form onSubmit={handleSubmit} className="w-full h-full flex flex-col justify-center items-center">
            <strong className="text-white text-3xl">Upload an Article</strong>
            <Input label="Title" placeholder="Enter title" onChangeFunc={e => setTitle(e.target.value)} />
            <Textarea label="Description" placeholder="Add small description" onChangeFunc={e => setDescription(e.target.value)}/>
            <MdEditor label="Content" onChangeFunc={setContent}/>
            <button type="submit" className="text-white font-bold py-4 px-8 rounded text-xl bg-blue-800 hover:bg-blue-900">Post</button>
        </form>
    );
}

export default withPageAuthRequired(DashboardPage);