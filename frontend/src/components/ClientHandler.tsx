"use client";
import { useEffect } from "react";
import { Session } from "@auth0/nextjs-auth0";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { setSession } from "@/lib/slices/session";

const ClientSessionHandler = ({ session }: { session: Session | object }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    useEffect(() => {
        if (session) {
            dispatch(setSession(session));
            router.push("/admin/profile");
        }
    }, [session, dispatch]);

    return <></>;
}

export default ClientSessionHandler;
