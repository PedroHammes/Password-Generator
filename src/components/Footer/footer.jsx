import styles from './style.module.css'

export default function Footer() {
    return (
        <footer>
            <div className={styles.codedBy}>
                <p>by <span>Pedro Hammes</span> </p>
            </div>
            <div className={styles.links}>
                <a href="https://www.linkedin.com/in/pedro-hammes-7a6883208/" target='_blank'>LinkedIn</a>
                <a href="https://github.com/PedroHammes" target='_blank'>GitHub</a>
            </div>
            {/* <a href="#">Home</a>
            <a href="#">New Password</a>
            <a href="#">Profile</a> */}
        </footer>
    )
}