"use client";
import Panel from "@/components/Panel";
import { useGetUserQuery } from "@/store/modules/api/user";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    return (
        <>
            <h1 className="text-white text-3xl">Please login</h1>
            <button onClick={() => router.replace("http://localhost:8080/login")} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
            </button>
        </>
    );
}

const AdminPage = () => {
    const { data, isLoading } = useGetUserQuery();
    
    if(isLoading) {
        return <div>Fetching user data...</div>;
    }

    return (
        <div className="w-full h-[70vh]">
            {
                data ? <Panel /> : <LoginPage />
            }
        </div>
    );
}

export default AdminPage;