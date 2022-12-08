import classes from "./button.module.css";

const Button = ({
   children, handleClick, background="#666",
   textColor = "#eaeaea", ...props
}) => {
    return (
        <button className={classes.btn} onClick={handleClick} {...props}
        style={{
            backgroundColor: `#${background}`,
            color: textColor
        }}>
            {children}
        </button>
    )
}
export default Button;