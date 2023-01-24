import React, {FC} from "react";
import {toastListType} from "../../types/toast.types";

interface toastBodyProps {
    toastData: toastListType,
    deleteToast: (id: number) => void
}

const ToastBody:FC<toastBodyProps> = ({toastData, deleteToast}) => {
    return (
        <div className={`toast ${toastData.type}`}>
           <span className='close' onClick={() => deleteToast(toastData.id)}></span>
           <div>
               <p className='title'>{toastData.title}</p>
               <p className='description'>{toastData.description}</p>
           </div>
       </div>
    );
}
export default ToastBody;