import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => { 
        const persistedValue = localStorage.getItem(key);
        return persistedValue !==null ? persistedValue : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);


    return ([value, setValue]);
};
 
export { useLocalStorage };