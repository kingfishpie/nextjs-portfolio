import styles from './button.module.css'

const Button = ({ children, inverse, disabled, ...rest }) => {
    return (
        <a href="/"className={inverse ? styles.inverseButton : styles.button} {...rest}>
            { children }
        </a>
    )
}

export default Button
