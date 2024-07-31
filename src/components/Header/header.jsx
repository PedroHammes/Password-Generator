import styles from './style.module.css'

export default function Header(props) {
    return (
        <header className={styles.header}>
            <h1>Welcome to <span className={styles.username}>Password Generator</span>!</h1>
            {/* <img src={props.avatar} alt="" /> */}
        </header>
    )
}