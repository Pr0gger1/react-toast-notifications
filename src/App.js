import {useToast} from "./hooks/useToast";

import Button from "./components/buttons/Button";
import Toast from "./components/toast/Toast";

function App() {
    const {toastElement, toastList, setToastList} = useToast();
  return (
    <div className="container">

        <h1>Toast components</h1>
        <div className="toast__buttons">
            <Button background={"03b309"} handleClick={
                () => new toastElement("Operation completed successfully!", "Success").success
            }>
                Access Toast
            </Button>

            <Button background={"2b8ad2"} handleClick={
                () => new toastElement("Informational message", "Info").info
            }>
                Info Toast
            </Button>

            <Button background={"e23e32"} handleClick={
                () => new toastElement("An unknown error happened!", "Ошибка").error
            }>
                Error Toast
            </Button>

            <Button background={"edba0d"} handleClick={
                () => new toastElement("Warning", "Pay attention!").warning
            }>
                Warning Toast
            </Button>
        </div>

        <Toast position="top_left" toastList={toastList} setToastList={setToastList}/>
    </div>
  );
}

export default App;
