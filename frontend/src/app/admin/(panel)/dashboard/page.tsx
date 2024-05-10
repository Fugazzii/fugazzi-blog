"use client";
import { UserModel } from "@/models/user";
import { useCreateArticleMutation } from "@/store/modules/api/articles";
import { userApi } from "@/store/modules/api/user";
import { useState } from "react";

const DashboardPage = () => {
    const { data } = userApi.endpoints.getUser.useQuery();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const calculateReadDuration = (contentLength: number) => contentLength / 60;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const [createArticle] = useCreateArticleMutation();

        const payload = JSON.stringify({
            title,
            content,
            links: [],
            readDuration: calculateReadDuration(content.length),
            date: new Date().toISOString(),
            author: data?.nickname,
            imgUrl: "",
            authorProfileImgUrl: data?.picture,
            description
        });
        await createArticle(payload);
    }

    return (
        <form onSubmit={handleSubmit} 
            className="w-full h-full flex flex-col justify-center items-center">
            <strong className="text-white text-3xl">Upload an Article</strong>
            <div className="mb-6 w-2/3">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter title</label>
                <input type="text" id="default-input" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 
                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                        p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-6 w-2/3">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" 
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 h-[20vh] 
                        rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" 
                    placeholder="Paste a content"
                    onChange={e => setContent(e.target.value)} 
                />
            </div>

            <button type="submit" className="text-white font-bold py-4 px-8 rounded text-xl bg-blue-800 hover:bg-blue-900">Post</button>
        </form>
    );
}

export default DashboardPage;