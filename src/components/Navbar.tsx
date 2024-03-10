import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Navbar = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!isDarkMode);
    
    return (
        <div className="w-full dark:bg-gray-900 flex flex-row h-24 p-4 justify-between">
            <Fragment>
                <p className="text-3xl text-white m-2 font-semibold">FUGAZZI</p>
                <div className="h-[3.5rem] min-h-[1em] w-px self-stretch bg-gradient-to-tr 
                    from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400">
                </div>
                <a className="leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">Home</a>
                <a className="leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">About</a>
                <a className="leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">Discord</a>
                <a className="leading-5 m-4 text-xl text-gray-400 font-bold hover:text-white" href="/">Twitter</a>
            </Fragment>
            <DarkModeSwitch
                className="mt-2"
                size={36}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                sunColor="yellow"
                moonColor="yellow"
            />
    </div>
    );
}