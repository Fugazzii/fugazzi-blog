"use client";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type TabLinkProps = {
    href: string;
    children: React.ReactNode;
    label: string;
    activeTabState: [string, Dispatch<SetStateAction<string>>];
}

const TabLink = ({ href, children, label, activeTabState }: TabLinkProps) => {
    const [activeTab, setActiveTab] = activeTabState;

    return (
        <li className="me-2 text-2xl">
            <Link href={href}
                onClick={() => setActiveTab(label.toLowerCase())}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg 
                hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
            >
                <svg className={`w-4 h-4 me-2 ${activeTab !== label.toLowerCase() 
                    ? "text-gray-400 dark:text-gray-300" 
                    : "text-blue-600 dark:text-blue-500"}
                `} 
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 20 20">
                    {children}
                </svg>
                <span>{label}</span>
            </Link>
        </li>
    );
}

export default TabLink;