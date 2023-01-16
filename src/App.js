import {useToast} from "./hooks/useToast";
import Button from "./components/buttons/Button";
import Toast from "./components/toast/Toast";

function App() {
    const {toastElement, toastList, setToastList} = useToast();
  return (
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

        <Toast position="top_right" toastList={toastList} setToastList={setToastList}/>
    </div>
  );
}

export default App;
