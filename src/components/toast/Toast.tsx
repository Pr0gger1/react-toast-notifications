import React, {FC} from "react";
import {ToastContainer} from "./ToastContainer";
import './toast.css';

interface toastProps {
    duration?: number
}
const Toast:FC<toastProps> = ({duration = 3000}) => {
    return (
        <ToastContainer duration={duration}/>
    )
}

export default Toast;