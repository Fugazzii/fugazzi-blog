"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { toggleThemeMode } from "../store/modules/theme-mode";
import { Fragment } from "react/jsx-runtime";

export const Navbar = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: any) => state.themeMode.isDarkMode);
    const handleDarkModeToggle = () => dispatch(toggleThemeMode());

    return (
        <div className="w-full flex flex-row h-22 p-4 justify-between">
            <Fragment>
                <p className="text-3xl text-white m-2 font-semibold">FUGAZZI</p>
                <div className="h-[3.5rem] min-h-[1em] w-px self-stretch bg-gradient-to-tr 
                    from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400">
                </div>
                <Link className="leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">Home</Link>
                <Link className="leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">About</Link>
                <Link className="leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">Discord</Link>
                <Link className="leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">Twitter</Link>
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
};
