import Article from "@/containers/Article";

type Props = {
    params: {
        id: string;
    },
    searchParams: object
}

const ArticlePage = ({ params: { id } }: Props) => {
    return (
        <div className="w-full flex flex-col items-center">
            <Article id={id} />
        </div>
    );
}

export default ArticlePage;