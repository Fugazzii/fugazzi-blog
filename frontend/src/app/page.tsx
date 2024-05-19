"use client";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

const DefaultPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/home")
    }, []);
    return <></>;
}

export default DefaultPage;