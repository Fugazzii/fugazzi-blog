import dynamic from "next/dynamic";
import Loading from "./loading";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import ClientSessionHandler from "@/components/ClientHandler";

export default withPageAuthRequired(async function AdminPage() {
    const session = await getSession() ?? {};
    
    const AuthButton = dynamic(() => import("@/components/AuthButton"), {
        ssr: true,
        loading: () => <Loading />
    });

    return !session ? (
        <div className="w-full h-[70vh] flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl m-10">Please login</h1>
            <AuthButton variant="login" />
        </div>
    ) : <ClientSessionHandler session={JSON.parse(JSON.stringify(session))} />;
}, { returnTo: "/admin/profile" });