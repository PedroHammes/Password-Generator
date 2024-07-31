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

            <div className={styles.passwordOptionsCheckbox}>

                {/* toggle switch do stack overflow */}
                <div className={styles.toggle}>
                    <input type="checkbox" className={styles.toggleInput} id="foo"/>
                    <label htmlFor="foo" className={styles.toggleLabel}></label>
                </div>
                {/* <label htmlFor="foo">Switch of Stack Overflow</label>    */}

                <label htmlFor="uppercase">
                    <input type="checkbox" id="uppercase" />
                    <span>Include Uppercase</span>
                </label>

                <label htmlFor="lowercase">
                    <input type="checkbox" id="lowercase" />
                    <span>Include Lowercase</span>
                </label>

                <label htmlFor="numbers">
                    <input type="checkbox" id="numbers" />
                    <span>Include Numbers</span>
                </label>

                <label htmlFor="symbols">
                    <input type="checkbox" id="numbers" />
                    <span>Include Symbols</span>
                </label>
            </div>
      </section>
    )
}