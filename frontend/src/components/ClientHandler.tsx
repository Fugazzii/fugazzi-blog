"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/store-provider";
import { setSession } from "@/store/modules/slices/session";
import { Session } from "@auth0/nextjs-auth0";
import { useRouter } from "next/navigation";

function ClientSessionHandler({ session }: { session: Session | object }) {
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
