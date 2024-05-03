import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type ChildrenProps = Readonly<{children: React.ReactNode;}>;

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
