"use client";

import MarkdownEditor from "@uiw/react-md-editor";
import { useState } from "react";

type MdEditorProps = {
    label: string;
    onChangeFunc: (s: string) => void;
}

const MdEditor = ({ label, onChangeFunc }: MdEditorProps) => {
    const [text, setText] = useState<string>("");
    return (
        <div className="mb-6 w-2/3">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <MarkdownEditor id="message"
                value={text}
                onChange={(v) => {
                    setText(v || "");
                    onChangeFunc(v || "");
                }}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 h-[20vh] 
                    rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500"
            />
        </div>
    );
}

export default MdEditor;