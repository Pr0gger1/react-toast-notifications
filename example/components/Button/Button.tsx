import React = require("react");
import './button.css';

interface buttonProps {
    children: JSX.Element | React.ReactNode,
    handleClick: (e: any) => void,
    variant?: "default" | "success" | "error" | "warning" | "info",
    value?: string
}
const Button = ({children, handleClick, variant = 'default', value = ''}: buttonProps) => {
    return (
        <button type='button' className={`btn ${"btn-" + variant}`}
                value={value}
                onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button;