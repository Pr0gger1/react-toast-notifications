import {useState} from "react";

export const useToast = () => {
    const [toastList, setToastList] = useState([]);

    const showToast = (type = "info", description, title) => {
        let toastTypes = {
            info: {
                id: toastList.length,
                title: title || "",
                description: description || "Toast",
                type: "info"
            }, success: {
                id: toastList.length,
                title: title || "",
                description: description || "Toast",
                type: "success"
            }, warning: {
                id: toastList.length,
                title: title || "",
                description: description || "Toast",
                type: "warning"
            }, error: {
                id: toastList.length,
                title: title || "",
                description: description || "Toast",
                type: "error"
            }
        };

        let toastProperties = null;
        switch (type) {
            case "info":
                toastProperties = toastTypes.info;
                break;
            case "success":
                toastProperties = toastTypes.success;
                break;
            case "warning":
                toastProperties = toastTypes.warning;
                break;
            case "error":
                toastProperties = toastTypes.error;
                break;
            default:
                console.log("default");
                break;
        }

        setToastList([...toastList, toastProperties]);
    }

    return {toastList, setToastList, showToast};
}