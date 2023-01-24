import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {useState} from "react";
import { Toast, useToast, ToastContext } from "../src";

import Button from "./components/Button/Button";
import {toastPosition} from "../src/types/toast.types";
import './index.css';


const App = () => {
    const {toastList, setToastList, config, toast} = useToast();
    const [currentPosition, setCurrentPosition] = useState<toastPosition>('top_center');
  return (
      <ToastContext.Provider value={{
          toastList, setToastList, toast, config
      }}>
          <div className="container">

        <h1>Toast components</h1>
        <div className="toast__buttons">
            <Button variant="success" handleClick={
                () => toast(
                    "Operation completed successfully!",
                    "success", {
                        position: currentPosition,
                        title: "rsagsrg"
                    })
            }>
                Access Toast
            </Button>

            <Button variant="info" handleClick={
                () => toast(
                    "Informational message",
                    "info", {
                        position: currentPosition
                    })
            }>
                Info Toast
            </Button>

            <Button variant="error" handleClick={
                () => toast(
                    "An unknown error happened!",
                    "error", {
                        position: currentPosition
                    })
            }>
                Error Toast
            </Button>

            <Button variant="warning" handleClick={
                () => toast(
                    "Warning",
                    "warning", {
                        position: currentPosition
                    })
            }>
                Warning Toast
            </Button>
        </div>

        <div className='toast_position_btn'>
            <Button
                value='top_right'
                handleClick={e => setCurrentPosition(e.target.value)}>
                    Top right
            </Button>

            <Button
                value='top_left'
                handleClick={e => setCurrentPosition(e.target.value)}>
                    Top left
            </Button>

            <Button
                value='bottom_right'
                handleClick={e => setCurrentPosition(e.target.value)}>
                    Bottom right
            </Button>

            <Button
                value='bottom_left'
                handleClick={e => setCurrentPosition(e.target.value)}>
                    Bottom left
            </Button>

            <Button
                value='top_center'
                handleClick={e => setCurrentPosition(e.target.value)}>
                    Top center
            </Button>

            <Button
                value='bottom_center'
                handleClick={e => setCurrentPosition(e.target.value)}>
                    Bottom center
            </Button>

        </div>

        <Toast/>
    </div>
      </ToastContext.Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));