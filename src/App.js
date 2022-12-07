import {Button} from "./components/ui/buttons/Button";

import Toast from "./components/ui/toast/Toast";
import {useToast} from "./hooks/useToast";


function App() {
    const {showToast, toastList, setToastList} = useToast();

  return (
    <div className="container">
        <h1>Toast components</h1>
        <div className="toast__buttons">
            <Button background="#03b309" handleClick={
                () => new showToast("Operation completed successfully!", "Success").success
            }>
                Access Toast
            </Button>

            <Button background="#2b8ad2" handleClick={
                () => new showToast("Informational message", "Info").info
            }>
                Info Toast
            </Button>

            <Button background="#e23e32" handleClick={
                () => new showToast("An unknown error happened!", "Ошибка").error
            }>
                Error Toast
            </Button>

            <Button background="#edba0d" handleClick={
                () => new showToast("Warning", "Pay attention!").warning
            }>
                Warning Toast
            </Button>
        </div>

        <Toast position="top_left" toastList={toastList} setToastList={setToastList}/>
    </div>
  );
}

export default App;
