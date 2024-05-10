"use client";
import Link from "next/link";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

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

const Tabs = () => {    
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        setActiveTab(window.location.pathname.split("/").pop() as string);
    }, []);

    return (
        <div className="w-full border-b-[2px] border-gray-200 dark:border-gray-700 mb-4">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <TabLink href="/admin/profile" label="Profile" activeTabState={[activeTab, setActiveTab]}>
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </TabLink>
                <TabLink href="/admin/dashboard" label="Dashboard" activeTabState={[activeTab, setActiveTab]}>
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </TabLink>
                <TabLink href="/admin/settings" label="Settings" activeTabState={[activeTab, setActiveTab]}>
                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                </TabLink>
                <TabLink href="/admin/contacts" label="Contacts" activeTabState={[activeTab, setActiveTab]}>
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </TabLink>
            </ul>
        </div>
    );
}

type Props = {
    readonly children: ReactNode;
}

const PanelLayout = ({ children }: Props) => {
    return (
        <div className="w-full h-full bg-gray-950 p-4 flex flex-col justify-around items-center">
            <Tabs />
            <div className="w-full h-[70vh] flex flex-col justify-center items-center">
                {children}
            </div>
        </div>
    );
}

export default PanelLayout;