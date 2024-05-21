type InputProps = {
    value: string;
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, placeholder, onChange, value }: InputProps) => {
    return (
        <div className="mb-6 w-2/3">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type="text" id="default-input" 
                className="bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
                    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default Input;