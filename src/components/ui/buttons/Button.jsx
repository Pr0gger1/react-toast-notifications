import classes from "./button.module.css";

export const Button = ({
   children, handleClick, style = "", bgcolor="#666", textColor = "#eaeaea",
    ...props
}) => {
    return (
        <button className={classes.btn} onClick={handleClick} {...props}
        style={{
            backgroundColor: bgcolor,
            color: textColor
        }}>
            {children}
        </button>
    )
}