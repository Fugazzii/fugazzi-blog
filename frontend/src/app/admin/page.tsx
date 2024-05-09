"use client";
import AuthButton from "@/components/AuthButton";
import { useGetUserQuery } from "@/store/modules/api/user";
import { useRouter } from "next/navigation";

const AdminPage = () => {
    const { data, isLoading } = useGetUserQuery();
    const router = useRouter();

    if(isLoading) {
        return <div>Fetching user data...</div>;
    }

    if(!!data) {
        router.push("/admin/profile");
    }

    return !data ? (
        <div className="w-full h-[70vh]">
            <h1 className="text-white text-3xl">Please login</h1>
            <AuthButton variant="login" />
        </div>
    ) : false;
}

export default AdminPage;