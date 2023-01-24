import {Dispatch, SetStateAction} from "react";

export type toastPosition = "top_right" | "top_left"
    | "top_center" | "bottom_right"
    | "bottom_left" | "bottom_center";


export type toastTypes = "info" | "warning" | "error" | "success";
export interface toastListType {
    id: number,
    title?: string,
    description: string,
    type: toastTypes
}

export interface toastConfig {
    title?: string,
    theme?: string,
    position: toastPosition
}
export type toastContextType = {
    toastList: toastListType[],
    setToastList: Dispatch<SetStateAction<toastListType[]>>
    toast: (description: string, type: toastTypes) => void,
    config: toastConfig
}