import classes from "./button.module.css";

const Button = ({children, handleClick, variant = "default"}) => {
    return (
        <button className={`${classes.btn} ${classes["btn-" + variant]}`}
                onClick={handleClick}>
            {children}
        </button>
    )
}
export default Button;