import styles from './button.module.css'

const Button = ({ children, ...rest }) => {
    return (
        <Button className={styles.button} {...rest}>
            { children }
        </Button>
    )
   }

export default Button;
