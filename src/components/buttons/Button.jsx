import classes from "./button.module.css";

const Button = ({children, handleClick, variant = "default", ...props}) => {
    return (
        <button type='button' className={`${classes.btn} ${classes["btn-" + variant]}`}
                onClick={handleClick} {...props}>
            {children}
        </button>
    )
}
export default Button;