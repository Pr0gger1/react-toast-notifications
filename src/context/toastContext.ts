import {createContext} from "react";
import {toastContextType} from "../types/toast.types";

const ToastContext = createContext<toastContextType>({
    toastList: [],
    setToastList: () => { throw new Error("Error! Override this function!")},
    toast: () => {throw new Error("Error! Override this function!")},
    config: {
        position: 'top_center'
    }

});
export default ToastContext;