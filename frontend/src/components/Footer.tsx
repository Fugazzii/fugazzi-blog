import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-950 bottom-0 w-full">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FUGAZZI</span>
                    </Link>
                    <span className="block text-sm text-gray-500 text-center dark:text-gray-400">Copyright © 2024 
                </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;