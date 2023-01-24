import React, {FC, useCallback, useContext, useEffect} from "react";
import ToastContext from "../../context/toastContext";

import ToastBody from "./ToastBody";

import {toastListType} from "../../types/toast.types";

interface toastContainerProps {
    duration: number
}

export const ToastContainer:FC<toastContainerProps> = ({duration = 3000}) => {
    const {toastList, setToastList, config} = useContext(ToastContext);

    const deleteToast = useCallback((id: number) => {
        setToastList(toastList.filter(el => el.id !== id));
    }, [setToastList, toastList]);

    // toast disappearance mechanism
    useEffect(() => {
        if (toastList.length) {
            let interval = setInterval(() => {
                deleteToast(toastList[0].id);
            }, duration);

            return () => clearInterval(interval);
        }
        return () => null;
    }, [deleteToast, duration, toastList]);

    return (
        <div className={`toast_container ${config.position} }`}>
            {
                toastList.map((toast: toastListType, index: number) => (
                    <ToastBody key={index} toastData={toast} deleteToast={deleteToast}/>
                ))
            }
        </div>
    );
}