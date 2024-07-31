import styles from './style.module.css'

export default function Section() {
    return (
        <section className={styles.mainSection}>
            <div className={styles.strength}>
                <p>Strength</p>
                <p>o o o o o</p>
            </div>

            <div className={styles.randomPassword}>
                <div>0123456789abcdf!</div>
                <button className={styles.copyButton}>Copy</button>
            </div>

            <div className={styles.passwordLengthDiv}>
                <input
                    type="range"
                    min={4}
                    max={16}
                    step={1}
                    className={styles.passwordLengthInput}
                />
                <div className={styles.passwordLength}>16</div>
            </div>

            <div className={styles.passwordOptionsToggle}>
                {/* toggle switch do stack overflow */}
                <div className={styles.toggle}>
                    <input type="checkbox" className={styles.toggleInput} id="uppercase"/>
                    <label htmlFor="uppercase" className={styles.toggleLabel}></label>
                    <span>Include Uppercase</span>
                </div>
                <div className={styles.toggle}>
                    <input type="checkbox" className={styles.toggleInput} id="lowercase"/>
                    <label htmlFor="lowercase" className={styles.toggleLabel}></label>
                    <span>Include Lowercase</span>
                </div>
                <div className={styles.toggle}>
                    <input type="checkbox" className={styles.toggleInput} id="numbers"/>
                    <label htmlFor="numbers" className={styles.toggleLabel}></label>
                    <span>Include Numbers</span>
                </div>
                <div className={styles.toggle}>
                    <input type="checkbox" className={styles.toggleInput} id="symbols"/>
                    <label htmlFor="symbols" className={styles.toggleLabel}></label>
                    <span>Include Symbols</span>
                </div>
            </div>
      </section>
    )
}