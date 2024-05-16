"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./loading";

const AdminPage = () => {
    const router = useRouter();
    const { user } = useUser();

    const AuthButton = dynamic(() => import("@/components/AuthButton"), {
        ssr: true,
        loading: () => <Loading />
    });

    useEffect(() => {
        if (!!user) {
            router.push("/admin/profile");
        }
    }, [user, router]);

    return !user && (
        <div className="w-full h-[70vh] flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl m-10">Please login</h1>
            <AuthButton variant="login" />
        </div>
    );
}

export default AdminPage;