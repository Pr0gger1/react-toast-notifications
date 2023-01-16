# React toast notification
This is a simple library that implements beautiful notifications in your project. The real example with toast notification you may find in the description of the project.
1. In the main js file you need to add the hook `useToast` with toast list, set toast list function and toast class. Also you need to add `ToastContext` and drop the above parameters there 
2. In the desired component, use the `useСontext` hook to call notification instances and change their position
## Example

```jsx
// App.js
import React, {useState} from "react";
import {useToast} from "./hooks/useToast";

import ToastContext from "./context/toastContext";
import Toast from "./components/ui/toast/Toast";

function App() {
    const {toastElement, toastList, setToastList} = useToast();
    const [toastPosition, setToastPosition] = useState('top_right');
    return (
        <ToastContext.Provider value={{
            toastList, setToastList, toastElement,
            position: toastPosition,
            setPosition: setToastPosition
        }}>
            <Component>
                <InnerComponent/>
                <Page/>
                <Toast position="top_center"/>
            </Component>

        </ToastContext.Provider>
    );


}
```

```jsx
// Some Page.jsx
import React, {useContext} from "react";
import ToastContext from "./toastContext";

function Page({props}) {
    const {toastElement, setPosition} = useContext(ToastContext);
    
    useEffect(() => {
        setPosition("top_center");
    }, [setPosition]);
    
    return (
        <div>
            <button onClick={
                () => new toastElement("Hello world!", "This is a title!").success
            }>
                Click me!
            </button>
        </div>
    );
}
```