import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/store-provider";

const inter = Inter({ subsets: ["latin"] });

type ChildrenProps = Readonly<{children: React.ReactNode;}>;

export const metadata: Metadata = {
    title: "Fugazzi Blog",
    description: "A blog about software development, blockchain and other tech-related topics.",
};

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <StoreProvider>
            <html lang="en">
                <body className={inter.className}>
                    {children}
                </body>
            </html>
        </StoreProvider>
    );
}
