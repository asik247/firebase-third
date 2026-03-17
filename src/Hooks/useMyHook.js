import { useState } from "react";

const useMyHook = (defautlValue) => {
    const [value, setValue] = useState(defautlValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return [value, handleChange]
}
export default useMyHook;