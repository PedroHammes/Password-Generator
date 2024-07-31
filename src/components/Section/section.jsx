import { useState } from 'react'
import styles from './style.module.css'

export default function Section() {

    const [ randomPassword, setRandomPassword ] = useState('Password will be here')
    const [ psswLength, setPsswLength ] = useState(8)
    const [ booleanUppercase, setBooleanUppercase ] = useState(false)
    const [ booleanLowercase, setBooleanLowercase ] = useState(false)
    const [ booleanNumber, setBooleanNumber ] = useState(true)
    const [ booleanSymbol, setBooleanSymbol ] = useState(false)

    function handleBooleanUppercase(event) {2
        let boolean = event.target.checked
        setBooleanUppercase(boolean)
        console.log(boolean)
        return boolean
    }

    function handleBooleanLowercase(event) {
        let boolean = event.target.checked
        setBooleanLowercase(boolean)
        console.log(boolean)
        return boolean
    }

    function handleBooleanNumber(event) {
        let boolean = event.target.checked
        setBooleanNumber(boolean)
        console.log(boolean)
        return boolean
    }

    function handleBooleanSymbol(event) {
        let boolean = event.target.checked
        setBooleanSymbol(boolean)
        console.log(boolean)
        return boolean
    }

    function generateNewPassword(ev) {
        // console.log(ev)
        const enabledChars = '0123456789abcdefghijklmnopqrstwxyzABCDEFGHIJKLMNOPQRSTWXYZ?/~^{}[]!@#$%&*()_-+=.,:;'
        let password = ''

        do {
            password += enabledChars[Math.floor(Math.random()*enabledChars.length)]
        } while (password.length < psswLength)

        setRandomPassword(`${password}`)
    }


    return (
        <section className={styles.mainSection}>
            <div className={styles.strength}>
                <p>Strength</p>
                <p>o o o o o</p>
            </div>

            <div className={styles.randomPassword}>
                <div>{randomPassword}</div>
                <button className={styles.copyButton}>Copy</button>
            </div>

            <div className={styles.passwordLengthDiv}>
                <input
                    type="range"
                    min={4}
                    max={16}
                    step={1}
                    defaultValue={8}
                    className={styles.passwordLengthInput}
                    id='passwordLengthRange'
                    onChange={(ev) => setPsswLength(ev.target.value)}   //Sempre que o usuário alterar o valor do range, este novo valor será setado como novo passwLength
                />
                <div className={styles.passwordLength}>{psswLength}</div>
            </div>


            <div className={styles.passwordOptionsToggle}>

                <div className={styles.toggle}>
                    <input 
                        type="checkbox"
                        className={styles.toggleInput} 
                        id="uppercase" 
                        checked={booleanUppercase}
                        onChange={handleBooleanUppercase}
                    />
                    <label htmlFor="uppercase" className={styles.toggleLabel}></label>
                    <span>Include Uppercase</span>
                </div>

                <div className={styles.toggle}>
                    <input 
                        type="checkbox" 
                        className={styles.toggleInput} 
                        id="lowercase"
                        checked={booleanLowercase}
                        onChange={handleBooleanLowercase}
                    />
                    <label htmlFor="lowercase" className={styles.toggleLabel}></label>
                    <span>Include Lowercase</span>
                </div>

                <div className={styles.toggle}>
                    <input
                        type="checkbox"
                        className={styles.toggleInput}
                        id="numbers"
                        checked={booleanNumber}
                        onChange={handleBooleanNumber}/>
                    <label htmlFor="numbers" className={styles.toggleLabel}></label>
                    <span>Include Numbers</span>
                </div>

                <div className={styles.toggle}>
                    <input
                        type="checkbox"
                        className={styles.toggleInput}
                        id="symbols"
                        checked={booleanSymbol}
                        onChange={handleBooleanSymbol}/>
                    <label htmlFor="symbols" className={styles.toggleLabel}></label>
                    <span>Include Symbols</span>
                </div>
            </div>

            <div className={styles.newPasswordDiv}>
                <button 
                    className={styles.newPasswordButton}
                    onClick={generateNewPassword}
                >Generate new password</button>
            </div>
      </section>
    )
}