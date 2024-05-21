import { ChangeEvent, useState } from "react";

function useFormInput(initialValue: string = "") {
    const [value, setValue] = useState<string>(initialValue);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }
  
    return {
        value,
        onChange: handleChange
    };
}

export default useFormInput;