import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type ChildrenProps = Readonly<{children: React.ReactNode;}>;

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <main className="flex flex-col justify-between items-center">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
