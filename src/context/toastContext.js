import {createContext} from "react";

const ToastContext = createContext({
   toastList: [],
   setToastList: () => {},
   position: 'top_right',
   setPosition: () => {},
   toastElement: null
});

export default ToastContext;