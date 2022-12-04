import {useCallback, useEffect} from "react";
import classes from "./toast.module.css";

const Toast = ({
   toastList, setToastList, position = "top_right", fade_time = 3000
}) => {

    let isPositionCorrect = ["top_right", "bottom_right", "top_left", "bottom_left"].includes(position);

    const deleteToast = useCallback(id => {
        setToastList(toastList.filter(el => el.id !== id));
    }, [setToastList, toastList]);


    // toast disappearance mechanism
    useEffect(() => {
        if (toastList.length) {
            let interval = setInterval(() => {
                deleteToast(toastList[0].id);
            }, fade_time);

            return () => clearInterval(interval);
        }
    }, [deleteToast, fade_time, toastList]);
    
    return (
        <div className={`${classes.toast_container} ${isPositionCorrect ? classes[position] : classes["top_right"] }`}>
            {
                toastList.map((toast, index) => (
                   <div key={index}
                        className={`${classes.toast} ${classes[toast.type]} ${isPositionCorrect ? classes[position] : classes["top_right"] }`}
                   >
                       <button className={classes.close} onClick={() => deleteToast(toast.id)}></button>
                       <div>
                           <p className={classes.title}>{toast.title}</p>
                           <p className={classes.description}>{toast.description}</p>
                       </div>

                   </div>
                ))
            }
        </div>
    )
}

export default Toast;