import styles from './TextAlert.module.css'
interface Props {
    children : string
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
}

const TextAlert = ({ children, type = 'p'}: Props) => {

    if(type === 'h1') {
        return (
            <h1 className={styles.textalert}>{children}</h1>
        )
    }

    if(type === 'h2') {
        return (
            <h2 className={styles.textalert}>{children}</h2>
        )
    }

    if(type === 'h3') {
        return (
            <h3 className={styles.textalert}>{children}</h3>
        )
    }

    if(type === 'h4') {
        return (
            <h4 className={styles.textalert}>{children}</h4>
        )
    }

    if(type === 'h5') {
        return (
            <h5 className={styles.textalert}>{children}</h5>
        )
    }
    
    if(type === 'span') {
        return (
            <span className={styles.textalert}>{children}</span>
        )
    }

    return (
        <div>
            <p className= {styles.textalert}>{children}</p>
        </div>
    )
}

export default TextAlert