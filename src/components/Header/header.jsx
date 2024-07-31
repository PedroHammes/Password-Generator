import styles from './style.module.css'

export default function Header(props) {
    return (
        <header className={styles.header}>
            <h1>Good Morning, Aki!</h1>
            <img src={props.avatar} alt="" />
        </header>
    )
}