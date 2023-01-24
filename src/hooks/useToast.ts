import {useState} from "react";
import {toastConfig, toastListType, toastTypes} from "../types/toast.types";

const defaultConfig: toastConfig = {
    position: 'top_center'
}
export const useToast = () => {
    const [toastList, setToastList] = useState<toastListType[]>([]);
    const [config, setConfig] = useState<toastConfig>(defaultConfig);
    const toast = (description: string, type: toastTypes, config: toastConfig = defaultConfig) => {
        let properties: toastListType = {
            id: toastList.length,
            description, type
        }
        setConfig(config);
        return setToastList([...toastList, properties]);
    }
    return {toastList, setToastList, config, toast};
}