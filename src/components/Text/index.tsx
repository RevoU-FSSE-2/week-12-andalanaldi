import styles from './Text.module.css'
interface Props {
    children : string
    type?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

const Text = ({ children, type = 'p'}: Props) => {

    if(type === 'h1') {
        return (
            <h1 className={styles.text}>{children}</h1>
        )
    }

    if(type === 'h2') {
        return (
            <h2 className={styles.text}>{children}</h2>
        )
    }

    if(type === 'h3') {
        return (
            <h3 className={styles.text}>{children}</h3>
        )
    }

    
    if(type === 'span') {
        return (
            <span className={styles.text}>{children}</span>
        )
    }

    return (
        <div>
            <p className= {styles.text}>{children}</p>
        </div>
    )
}

export default Text