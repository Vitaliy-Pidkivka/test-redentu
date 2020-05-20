import React from "react";
import styles from './Button.module.scss'

const Button = ({children, className = 'button', onClick}) => (
    <button
        className={`${styles.button} ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
)
export default Button