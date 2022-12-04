import {Button} from "./components/ui/buttons/Button";
import Toast from "./components/ui/toast/Toast";

import {useToast} from "./hooks/useToast";

function App() {
    const {showToast, toastList, setToastList} = useToast();

  return (
    <div className="container">
        <h1>Toast components</h1>
        <div className="toast__buttons">
            <Button bgcolor="#03b309" handleClick={() => showToast(
                "success", "Operation completed successfully!", "Success!")}>
                Access Toast
            </Button>

            <Button bgcolor="#2b8ad2" handleClick={() => showToast(
                "info", "Informational message", "Info")}>
                Info Toast
            </Button>

            <Button bgcolor="#e23e32" handleClick={() => showToast(
                "error", "An unknown error happened!", "Ошибка")}>
                Error Toast
            </Button>

            <Button bgcolor="#edba0d" handleClick={() => showToast(
                "warning", "Warning", "Pay attention!")}>
                Warning Toast
            </Button>

        </div>

        <Toast position="top_left" toastList={toastList} setToastList={setToastList}/>
    </div>
  );
}

export default App;
