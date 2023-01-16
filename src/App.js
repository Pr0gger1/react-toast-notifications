import {useState} from "react";
import {useToast} from "./hooks/useToast";
import ToastContext from "./context/toastContext";

import Button from "./components/buttons/Button";
import Toast from "./components/toast/Toast";

function App() {
    const {toastElement, toastList, setToastList} = useToast();
    const [currentPosition, setCurrentPosition] = useState('top_right');

  return (
      <ToastContext.Provider value={{
          toastList, setToastList, toastElement,
          position: currentPosition,
          setPosition: setCurrentPosition,
      }}>
          <div className="container">

        <h1>Toast components</h1>
        <div className="toast__buttons">
            <Button variant="success" handleClick={
                () => new toastElement("Operation completed successfully!", "Success").success
            }>
                Access Toast
            </Button>

            <Button variant="info" handleClick={
                () => new toastElement("Informational message", "Info").info
            }>
                Info Toast
            </Button>

            <Button variant="error" handleClick={
                () => new toastElement("An unknown error happened!", "Ошибка").error
            }>
                Error Toast
            </Button>

            <Button variant="warning" handleClick={
                () => new toastElement("Warning", "Pay attention!").warning
            }>
                Warning Toast
            </Button>
        </div>

        <div className='toast_position_btn'>
            <Button
                value='top_right'
                onClick={e => setCurrentPosition(e.target.value)}>
                    Top right
            </Button>

            <Button
                value='top_left'
                onClick={e => setCurrentPosition(e.target.value)}>
                    Top left
            </Button>

            <Button
                value='bottom_right'
                onClick={e => setCurrentPosition(e.target.value)}>
                    Bottom right
            </Button>

            <Button
                value='bottom_left'
                onClick={e => setCurrentPosition(e.target.value)}>
                    Bottom left
            </Button>

            <Button
                value='top_center'
                onClick={e => setCurrentPosition(e.target.value)}>
                    Top center
            </Button>

            <Button
                value='bottom_center'
                onClick={e => setCurrentPosition(e.target.value)}>
                    Bottom center
            </Button>

        </div>

        <Toast position={currentPosition}/>
    </div>
      </ToastContext.Provider>
  );
}

export default App;
