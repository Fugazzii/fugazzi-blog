"use client";
import { useDeleteArticleMutation, useGetAllPreviewsQuery } from "@/lib/api/articles";
import Loader from "../components/Loader";
import ArticlePreview from "../components/ArticlePreview";
import { useUser } from "@auth0/nextjs-auth0/client";

const Feed = () => {
    const { data: previews, error, isLoading } = useGetAllPreviewsQuery("articlesApi");
    const [deleteArticle] = useDeleteArticleMutation();
    const { user } = useUser();

    if(isLoading) {
        return <Loader />;
    }

    if(!!error || !previews) {
        return <p>Failed to retrieve</p>;
    }

    return previews.map((preview, idx) => (
        <ArticlePreview key={idx} {...{ deleteArticle, user, ...preview }} />
    ));
};

export default Feed;