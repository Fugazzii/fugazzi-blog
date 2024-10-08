"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleThemeMode } from "@/lib/slices/theme-mode";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Fragment } from "react/jsx-runtime";

const Navbar = () => {
    const dispatch = useAppDispatch();
    const isDarkMode = useAppSelector(state => state.themeMode.isDarkMode);
    const handleDarkModeToggle = () => dispatch(toggleThemeMode());

    return (
        <div className="w-full flex flex-row h-22 p-4 justify-between dark:bg-gray-950">
            <Fragment>
                <p className="text-3xl text-white m-2 font-semibold">FUGAZZI</p>
                <div className="hidden md:block h-[3.5rem] min-h-[1em] w-px self-stretch bg-gradient-to-tr 
                    from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400">
                </div>
                <Link className="hidden md:block leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/home">Home</Link>
                <Link className="hidden md:block leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">About</Link>
                <Link className="hidden md:block leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="https://www.linkedin.com/in/ilia-sichinava/">LinkedIn</Link>
                <Link className="hidden md:block leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">Twitter</Link>
            </Fragment>
            <DarkModeSwitch
                className="mt-2"
                size={36}
                checked={isDarkMode}
                onChange={handleDarkModeToggle}
                sunColor="yellow"
                moonColor="yellow"
            />
        </div>
    );
}

export default Navbar;