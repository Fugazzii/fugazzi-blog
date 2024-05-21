"use client";

import { useCreateArticleMutation } from "@/lib/api/articles";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import useFormInput from "./useFormInput";

const useDashboard = () => {
    const { user } = useUser();
    
    const title = useFormInput("");
    const content = useFormInput("");
    const description = useFormInput("");

    const [createArticle] = useCreateArticleMutation();

    const calculateReadDuration = (contentLength: number) => {
        const wordsPerMinute = 200;
        const minutes = contentLength / wordsPerMinute;
        return Math.ceil(minutes);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await createArticle({
            title: title.value,
            content: content.value,
            links: [],
            readDuration: calculateReadDuration(content.value.length),
            createdAt: new Date().toString(),
            description: description.value,
            author: user!.nickname ?? "unknown",
            imgUrl: "https://nakamoto.com/content/images/size/w960/2020/01/introduction-to-cryptocurrency.png",
            authorProfileImgUrl: user!.picture ?? "404"
        });

        alert("Article posted successfully");
    }

    return {
        title,
        content,
        description,
        handleSubmit
    };
}

export default useDashboard;