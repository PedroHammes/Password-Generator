import { useState } from 'react'
import styles from './style.module.css'

export default function Section() {

    const [ randomPassword, setRandomPassword ] = useState('Password will be here')
    const [ psswLength, setPsswLength ] = useState(8)
    const [ booleanUppercase, setBooleanUppercase ] = useState(false)
    const [ booleanLowercase, setBooleanLowercase ] = useState(false)
    const [ booleanNumber, setBooleanNumber ] = useState(true)
    const [ booleanSpecial, setBooleanSpecial ] = useState(false)
    const numericChars = '0123456789'
    const lowercaseChars = 'abcdefghijklmnopqrstwxyz'
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTWXYZ'
    const specialChars = '?/~^{}[]!@#$%&*()_-+=.,:;'

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

    function handleBooleanSpecial(event) {
        let boolean = event.target.checked
        setBooleanSpecial(boolean)
        console.log(boolean)
        return boolean
    }

    function generateNewPassword(ev) {
        // console.log(ev)
        let allowedCharacters = ''
        let password = ''

        if (!booleanNumber && !booleanLowercase && !booleanUppercase && !booleanSpecial) {
            alert('To create some password, able some option bellow')
        } else {
            if (booleanNumber) {
                allowedCharacters += numericChars
            }
            if (booleanLowercase) {
                allowedCharacters += lowercaseChars
            }
            if (booleanUppercase) {
                allowedCharacters += uppercaseChars
            }
            if (booleanSpecial) {
                allowedCharacters += specialChars
            }
        }
        

        do {
            password += allowedCharacters[Math.floor(Math.random()*allowedCharacters.length)]
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
                        id="special"
                        checked={booleanSpecial}
                        onChange={handleBooleanSpecial}/>
                    <label htmlFor="special" className={styles.toggleLabel}></label>
                    <span>Include special</span>
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