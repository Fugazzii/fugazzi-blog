"use client";
import { UserModel } from "@/models/user";
import { Claims } from "@auth0/nextjs-auth0";
import { useRouter } from "next/navigation";

type Props = {
    variant: "login" | "logout";
    user?: UserModel | Claims;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const AuthButton = (props: Props) => {
    const router = useRouter();

    return (
        <button onClick={() => router.push(`/api/auth/${props.variant}`)} 
        className={`text-white font-bold py-4 px-6 rounded text-lg
            ${props.variant === "login" 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "bg-red-600 hover:bg-red-700"} 
        `}>
            {capitalize(props.variant)}
        </button>
    );
}

export default AuthButton;
