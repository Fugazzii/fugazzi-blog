"use client";
import { selectSession } from "@/store/modules/slices/session";
import { useUser } from "@auth0/nextjs-auth0/client";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const ProfileTab = () => {
    const { user } = useUser();
    const AuthButton = dynamic(() => import("@/components/AuthButton"), {
        ssr: false
    });

    const session = useSelector(selectSession);
    
    return user && (
        <>
            <div className="text-center my-4">
                <img className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
                    src={user?.picture ?? "..."} alt="Not Found" />
                <div className="py-2">
                    <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">{user.name}</h3>
                    <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                        <svg className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path className=""d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        </svg>
                        {user.email}
                    </div>
                </div>
            </div>
            <div className="flex gap-2 px-2">
                <button
                    className="text-white font-bold py-4 px-8 rounded text-lg bg-blue-800 hover:bg-blue-900">
                    Info
                </button>
                <AuthButton variant="logout" user={user} />
            </div>
        </>
    );
}

export default ProfileTab;