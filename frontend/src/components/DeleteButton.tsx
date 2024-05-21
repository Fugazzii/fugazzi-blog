import type { UserProfile } from "@auth0/nextjs-auth0/client";

type Props = {
    id: string;
    user: UserProfile | null;
    deleteArticle: (id: string) => Promise<void>;
}

const DeleteButton = ({ id, deleteArticle, user }: Props) => {
    const handleDelete = async (e: any) => {
        e.preventDefault();
        try {
            if(!id) {
                throw new Error("Invalid ID");
            }
            await deleteArticle(id);
            alert("Successfully deleted");            
        } catch (error) {
            console.error(error);
            alert("Failed to delete");
        }
    }

    return user && user.email === process.env.ADMIN_EMAIL 
        ?   <button onClick={handleDelete}
                className="text-white font-bold ml-8 py-2 px-6 rounded text-lg bg-red-600 hover:bg-red-700">
                Delete
            </button> 
        :   <></>
}

export default DeleteButton;