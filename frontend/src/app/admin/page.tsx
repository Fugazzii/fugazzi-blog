"use client";
import { useGetUserQuery } from "@/store/modules/user/api";

const AdminPage = () => {
    const { data, isLoading } = useGetUserQuery();
    
    if(isLoading) {
        return <div>Fetching user data...</div>;
    }

    console.log(data);
    return (
        <div>
            <h1>Admin Page</h1>
            <p>{data?.name}</p>
        </div>
    );
}

export default AdminPage;