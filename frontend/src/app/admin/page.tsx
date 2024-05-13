"use client";
import AuthButton from "@/components/AuthButton";
import { useGetUserQuery } from "@/store/modules/api/user";
import { useRouter } from "next/navigation";
import Loading from "../home/loading";
import { useEffect } from "react";

const AdminPage = () => {
    const { data, isLoading } = useGetUserQuery();
    const router = useRouter();

    useEffect(() => {
        if(!!data) {
            router.push("/admin/profile");
        }
    }, [data, router]);

    if(isLoading) {
        return <Loading />;
    }

    return (
        <div className="w-full h-[70vh] flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl m-10">Please login</h1>
            <AuthButton variant="login" />
        </div>
    );
}

export default AdminPage;