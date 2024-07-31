import styles from './style.module.css'

export default function Header(props) {
    return (
        <header className={styles.header}>
            <h1>Good Morning, <span className={styles.username}>Aki</span>!</h1>
            <img src={props.avatar} alt="" />
        </header>
    )
}