type TextareaProps = {
    label: string;
    placeholder: string;
    onChangeFunc: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea = ({ label, placeholder, onChangeFunc }: TextareaProps) => {
    return (
        <div className="mb-6 w-2/3">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <textarea id="message" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 h-[20vh] 
                    rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                    dark:focus:border-blue-500" 
                placeholder={placeholder}
                onChange={onChangeFunc}
            />
        </div>
    );
}

export default Textarea;