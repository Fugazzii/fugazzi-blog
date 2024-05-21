import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { StoreProvider } from "./StoreProvider";
import Footer from "@/components/Footer";
import Navbar from "@/containers/Navbar";

const inter = Inter({ subsets: ["latin"] });

type ChildrenProps = Readonly<{children: React.ReactNode;}>;

export const metadata: Metadata = {
    title: "Fugazzi Blog",
    description: "A blog about software development, blockchain and other tech-related topics."
};

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <StoreProvider>
            <html lang="en">
                <UserProvider>
                    <body className={`${inter.className} bg-gray-900`}>
                        <main className="w-full min-h-screen flex flex-col justify-between items-center">
                            <Navbar />
                            {children}
                            <Footer />
                        </main>
                    </body>
                </UserProvider>
            </html>
        </StoreProvider>
    );
}
