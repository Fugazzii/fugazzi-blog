"use client";
import { useGetUserQuery } from "@/store/modules/user/api";
import { useRouter } from "next/navigation";

const AdminPage = () => {
    const { data, isLoading } = useGetUserQuery();
    const router = useRouter();

    if(isLoading) {
        return <div>Fetching user data...</div>;
    }

    return (
        <div>
            <h1 className="text-white">Admin Page</h1>
            {
                data ? (
                    <p>Welcome, {data?.name}</p>
                ) : (
                    <button
                    onClick={() => router.replace("http://localhost:8080/login")} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>                        
                )
            }
        </div>
    );
}

export default AdminPage;